import {
  Receipt,
  GraduationCap,
  Landmark,
  CreditCard,
  CalendarCheck,
  ShieldAlert,
  HeartPulse,
  Briefcase,
  LayoutGrid,
  ChevronRight,
} from 'lucide-react';
import type { Category } from '../types';

const iconMap: Record<string, React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>> = {
  'receipt': Receipt,
  'graduation-cap': GraduationCap,
  'landmark': Landmark,
  'id-card': CreditCard,
  'calendar-check': CalendarCheck,
  'shield-alert': ShieldAlert,
  'heart-pulse': HeartPulse,
  'briefcase': Briefcase,
  'layout-grid': LayoutGrid,
};

interface CategoryCardProps {
  category: Category;
  onClick: (category: Category) => void;
}

export default function CategoryCard({ category, onClick }: CategoryCardProps) {
  const Icon = iconMap[category.icon] ?? LayoutGrid;

  return (
    <button
      onClick={() => onClick(category)}
      className="relative flex flex-col items-start justify-between rounded-2xl p-4 text-left transition-all duration-200 hover:scale-[1.03] hover:shadow-xl active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-white/40"
      style={{ backgroundColor: category.color, minHeight: '148px' }}
      aria-label={`Abrir categoria ${category.title}`}
    >
      <div className="mb-2 rounded-xl bg-white/20 p-2.5">
        <Icon size={28} color="#fff" strokeWidth={1.8} />
      </div>

      <div className="flex-1">
        <h2 className="text-[15px] font-bold leading-tight text-white">{category.title}</h2>
        <p className="mt-1 text-[11px] leading-snug text-white/85">{category.description}</p>
      </div>

      <div className="mt-3 flex w-full justify-end">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/25">
          <ChevronRight size={14} color="#fff" strokeWidth={2.5} />
        </span>
      </div>
    </button>
  );
}
