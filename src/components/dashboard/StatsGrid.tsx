import { CheckCircle, Clock, AlertTriangle, ListTodo, Layers, CalendarX } from 'lucide-react';
import { TaskStats } from '../../types';

interface StatsGridProps {
  stats: TaskStats;
}

const statCards = [
  {
    key: 'total' as keyof TaskStats,
    label: 'Total Tasks',
    icon: Layers,
    color: 'bg-blue-50 text-blue-600',
    iconBg: 'bg-blue-100',
    border: 'border-blue-100',
  },
  {
    key: 'todo' as keyof TaskStats,
    label: 'To Do',
    icon: ListTodo,
    color: 'bg-slate-50 text-slate-600',
    iconBg: 'bg-slate-100',
    border: 'border-slate-100',
  },
  {
    key: 'in_progress' as keyof TaskStats,
    label: 'In Progress',
    icon: Clock,
    color: 'bg-amber-50 text-amber-600',
    iconBg: 'bg-amber-100',
    border: 'border-amber-100',
  },
  {
    key: 'completed' as keyof TaskStats,
    label: 'Completed',
    icon: CheckCircle,
    color: 'bg-emerald-50 text-emerald-600',
    iconBg: 'bg-emerald-100',
    border: 'border-emerald-100',
  },
  {
    key: 'high_priority' as keyof TaskStats,
    label: 'High Priority',
    icon: AlertTriangle,
    color: 'bg-rose-50 text-rose-600',
    iconBg: 'bg-rose-100',
    border: 'border-rose-100',
  },
  {
    key: 'overdue' as keyof TaskStats,
    label: 'Overdue',
    icon: CalendarX,
    color: 'bg-orange-50 text-orange-600',
    iconBg: 'bg-orange-100',
    border: 'border-orange-100',
  },
];

export default function StatsGrid({ stats }: StatsGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
      {statCards.map(({ key, label, icon: Icon, color, iconBg, border }) => (
        <div
          key={key}
          className={`bg-white rounded-2xl border ${border} p-5 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow`}
        >
          <div className={`w-10 h-10 ${iconBg} rounded-xl flex items-center justify-center`}>
            <Icon className={`w-5 h-5 ${color.split(' ')[1]}`} />
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-900">{stats[key]}</div>
            <div className="text-xs text-slate-500 font-medium mt-0.5">{label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
