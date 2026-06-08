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
      style={{ backgroundColor: category.color, minHeight: '220px' }}
      aria-label={`Abrir categoria ${category.title}`}
    >
      <div className="mb-2 rounded-xl bg-white/20 p-2.5">
        <Icon size={30} color="#fff" strokeWidth={1.8} />
      </div>

      <div className="flex-1">
  <h2 className="text-xl font-bold leading-tight text-white">
    {category.title}
  </h2>

  <div className="mt-3 space-y-1">
    {category.services.slice(0, 3).map((service) => (
      <p key={service.id} className="text-xs text-white/90">
        ▸ {service.name}
      </p>
    ))}
  </div>
</div>

<div className="mt-4 flex w-full items-center justify-between">
  <span className="text-xs font-semibold text-white/80">
    
  </span>

  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/25">
    <ChevronRight size={18} color="#fff" strokeWidth={2.5} />
  </span>
</div>
    </button>
  );
}
