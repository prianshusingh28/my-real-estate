import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabase';
import { Task, TaskFormData, TaskStats } from '../types';
import { useAuth } from '../contexts/AuthContext';

export function useTasks() {
  const { user } = useAuth();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTasks = useCallback(async () => {
    if (!user) return;
    setLoading(true);
    const { data, error } = await supabase
      .from('tasks')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });

    if (error) {
      setError(error.message);
    } else {
      setTasks(data || []);
    }
    setLoading(false);
  }, [user]);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const createTask = async (data: TaskFormData) => {
    if (!user) return { error: 'Not authenticated' };
    const { error } = await supabase.from('tasks').insert({
      ...data,
      user_id: user.id,
      due_date: data.due_date || null,
    });
    if (!error) fetchTasks();
    return { error: error?.message || null };
  };

  const updateTask = async (id: string, data: Partial<TaskFormData>) => {
    const { error } = await supabase
      .from('tasks')
      .update({ ...data, due_date: data.due_date || null })
      .eq('id', id);
    if (!error) fetchTasks();
    return { error: error?.message || null };
  };

  const deleteTask = async (id: string) => {
    const { error } = await supabase.from('tasks').delete().eq('id', id);
    if (!error) fetchTasks();
    return { error: error?.message || null };
  };

  const getStats = (): TaskStats => {
    const today = new Date().toISOString().split('T')[0];
    return {
      total: tasks.length,
      todo: tasks.filter(t => t.status === 'todo').length,
      in_progress: tasks.filter(t => t.status === 'in_progress').length,
      completed: tasks.filter(t => t.status === 'completed').length,
      high_priority: tasks.filter(t => t.priority === 'high').length,
      overdue: tasks.filter(t => t.due_date && t.due_date < today && t.status !== 'completed').length,
    };
  };

  return { tasks, loading, error, createTask, updateTask, deleteTask, getStats, refetch: fetchTasks };
}
