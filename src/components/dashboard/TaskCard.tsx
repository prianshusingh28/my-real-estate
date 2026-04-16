import { Calendar, Pencil, Trash2, CheckCircle, Clock, Circle } from 'lucide-react';
import { Task } from '../../types';

interface TaskCardProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
  onStatusChange: (id: string, status: Task['status']) => void;
}

const priorityStyles = {
  low: 'bg-slate-100 text-slate-500',
  medium: 'bg-amber-50 text-amber-600 border border-amber-200',
  high: 'bg-rose-50 text-rose-600 border border-rose-200',
};

const statusConfig = {
  todo: { label: 'To Do', icon: Circle, color: 'text-slate-400' },
  in_progress: { label: 'In Progress', icon: Clock, color: 'text-amber-500' },
  completed: { label: 'Done', icon: CheckCircle, color: 'text-emerald-500' },
};

const nextStatus: Record<Task['status'], Task['status']> = {
  todo: 'in_progress',
  in_progress: 'completed',
  completed: 'todo',
};

export default function TaskCard({ task, onEdit, onDelete, onStatusChange }: TaskCardProps) {
  const today = new Date().toISOString().split('T')[0];
  const isOverdue = task.due_date && task.due_date < today && task.status !== 'completed';
  const StatusIcon = statusConfig[task.status].icon;

  return (
    <div className={`bg-white border rounded-2xl p-5 shadow-sm hover:shadow-md transition-all group ${
      task.status === 'completed' ? 'opacity-70' : ''
    } ${isOverdue ? 'border-red-200' : 'border-slate-200'}`}>
      <div className="flex items-start gap-3">
        <button
          onClick={() => onStatusChange(task.id, nextStatus[task.status])}
          className={`mt-0.5 flex-shrink-0 transition-transform hover:scale-110 ${statusConfig[task.status].color}`}
          title="Click to change status"
        >
          <StatusIcon className="w-5 h-5" />
        </button>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h3 className={`font-semibold text-slate-900 text-sm leading-snug ${task.status === 'completed' ? 'line-through text-slate-400' : ''}`}>
              {task.title}
            </h3>
            <div className="flex items-center gap-1 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={() => onEdit(task)}
                className="p-1.5 text-slate-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"
              >
                <Pencil className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onDelete(task.id)}
                className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {task.description && (
            <p className="text-slate-500 text-xs mt-1 leading-relaxed line-clamp-2">{task.description}</p>
          )}

          <div className="flex items-center gap-2 mt-3 flex-wrap">
            <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${priorityStyles[task.priority]}`}>
              {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
            </span>

            {task.due_date && (
              <span className={`flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full ${
                isOverdue ? 'bg-red-50 text-red-600 border border-red-200' : 'bg-slate-50 text-slate-500'
              }`}>
                <Calendar className="w-3 h-3" />
                {new Date(task.due_date + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                {isOverdue && ' · Overdue'}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
