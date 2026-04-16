import { useState, useMemo } from 'react';
import { Plus, Search, SlidersHorizontal, Loader2, ClipboardList } from 'lucide-react';
import { useTasks } from '../../hooks/useTasks';
import { Task, TaskFormData, TaskStatus, TaskPriority } from '../../types';
import StatsGrid from './StatsGrid';
import TaskCard from './TaskCard';
import TaskModal from './TaskModal';

type FilterStatus = 'all' | TaskStatus;
type FilterPriority = 'all' | TaskPriority;
type SortOption = 'newest' | 'oldest' | 'due_date' | 'priority';

const priorityOrder: Record<TaskPriority, number> = { high: 0, medium: 1, low: 2 };

export default function Dashboard() {
  const { tasks, loading, createTask, updateTask, deleteTask, getStats } = useTasks();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState<FilterStatus>('all');
  const [filterPriority, setFilterPriority] = useState<FilterPriority>('all');
  const [sortBy, setSortBy] = useState<SortOption>('newest');

  const stats = getStats();

  const filteredTasks = useMemo(() => {
    let result = [...tasks];

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(t => t.title.toLowerCase().includes(q) || t.description.toLowerCase().includes(q));
    }
    if (filterStatus !== 'all') result = result.filter(t => t.status === filterStatus);
    if (filterPriority !== 'all') result = result.filter(t => t.priority === filterPriority);

    result.sort((a, b) => {
      if (sortBy === 'newest') return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
      if (sortBy === 'oldest') return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
      if (sortBy === 'due_date') {
        if (!a.due_date) return 1;
        if (!b.due_date) return -1;
        return a.due_date.localeCompare(b.due_date);
      }
      if (sortBy === 'priority') return priorityOrder[a.priority] - priorityOrder[b.priority];
      return 0;
    });

    return result;
  }, [tasks, search, filterStatus, filterPriority, sortBy]);

  const handleCreate = async (data: TaskFormData) => {
    return await createTask(data);
  };

  const handleEdit = async (data: TaskFormData) => {
    if (!editingTask) return { error: 'No task selected' };
    return await updateTask(editingTask.id, data);
  };

  const handleStatusChange = async (id: string, status: Task['status']) => {
    await updateTask(id, { status });
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Delete this task?')) {
      await deleteTask(id);
    }
  };

  const openEdit = (task: Task) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingTask(null);
  };

  const selectClass = "bg-white border border-slate-200 text-slate-700 text-sm rounded-xl px-3 py-2 focus:outline-none focus:border-blue-400 transition-all cursor-pointer";

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">My Dashboard</h1>
            <p className="text-slate-500 text-sm mt-0.5">Track and manage all your tasks</p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-5 py-2.5 rounded-xl transition-all shadow-md shadow-blue-500/20 hover:shadow-blue-500/30 text-sm"
          >
            <Plus className="w-4 h-4" />
            <span>New Task</span>
          </button>
        </div>

        <StatsGrid stats={stats} />

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search tasks..."
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all"
              />
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <SlidersHorizontal className="w-4 h-4 text-slate-400" />
              <select value={filterStatus} onChange={e => setFilterStatus(e.target.value as FilterStatus)} className={selectClass}>
                <option value="all">All Status</option>
                <option value="todo">To Do</option>
                <option value="in_progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
              <select value={filterPriority} onChange={e => setFilterPriority(e.target.value as FilterPriority)} className={selectClass}>
                <option value="all">All Priority</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
              <select value={sortBy} onChange={e => setSortBy(e.target.value as SortOption)} className={selectClass}>
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="due_date">Due Date</option>
                <option value="priority">Priority</option>
              </select>
            </div>
          </div>

          <div className="p-6">
            {loading ? (
              <div className="flex items-center justify-center py-16 gap-3 text-slate-400">
                <Loader2 className="w-6 h-6 animate-spin" />
                <span className="text-sm">Loading tasks...</span>
              </div>
            ) : filteredTasks.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center mb-4">
                  <ClipboardList className="w-7 h-7 text-slate-400" />
                </div>
                <h3 className="text-slate-700 font-semibold">
                  {tasks.length === 0 ? 'No tasks yet' : 'No tasks match your filters'}
                </h3>
                <p className="text-slate-400 text-sm mt-1">
                  {tasks.length === 0 ? 'Create your first task to get started.' : 'Try adjusting your search or filters.'}
                </p>
                {tasks.length === 0 && (
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="mt-4 flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-xl transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                    Create Task
                  </button>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredTasks.map(task => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    onEdit={openEdit}
                    onDelete={handleDelete}
                    onStatusChange={handleStatusChange}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <TaskModal
          task={editingTask}
          onClose={closeModal}
          onSubmit={editingTask ? handleEdit : handleCreate}
        />
      )}
    </div>
  );
}
