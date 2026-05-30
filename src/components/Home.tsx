import { MapPin, Info, Waves } from 'lucide-react';
import type { Category } from '../types';
import CategoryCard from './CategoryCard';

interface HomeProps {
  categories: Category[];
  onCategoryClick: (category: Category) => void;
}

export default function Home({ categories, onCategoryClick }: HomeProps) {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-[#0D2B5E] px-4 py-6 text-center md:px-8 md:py-10">
        <h1 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">Utilinks</h1>
        <p className="mt-1 text-sm text-blue-200 md:text-base">Serviços públicos ao alcance de todos</p>
      </header>

      {/* Grid */}
      <main className="flex-1 px-3 py-4 md:px-8 md:py-8">
        <div className="grid grid-cols-3 gap-3 md:grid-cols-4 lg:grid-cols-6 md:gap-4 lg:gap-5">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} onClick={onCategoryClick} />
          ))}
        </div>

        {/* Info banner */}
        <div className="mt-5 flex items-start gap-3 rounded-2xl bg-blue-50 px-4 py-3.5 shadow-sm md:mt-8 md:px-6 md:py-4">
          <div className="mt-0.5 flex-shrink-0 rounded-full bg-blue-200 p-1.5">
            <Info size={18} color="#1565C0" strokeWidth={2} className="md:h-5 md:w-5" />
          </div>
          <p className="text-[13px] leading-relaxed text-blue-800 md:text-sm">
            Site oficial com links diretos para facilitar seu dia a dia com os serviços públicos.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex flex-col items-center justify-between gap-4 bg-[#0D2B5E] px-5 py-6 md:flex-row md:px-8">
        <div className="flex items-center gap-2">
          <MapPin size={20} color="#90CAF9" strokeWidth={2} className="flex-shrink-0 md:h-6 md:w-6" />
          <div>
            <p className="text-sm font-semibold text-white md:text-base">Açailândia – MA</p>
            <p className="text-xs text-blue-300 md:text-sm">Informação que conecta nossa cidade.</p>
          </div>
        </div>
        <Waves size={32} color="#90CAF9" strokeWidth={1.5} className="md:h-10 md:w-10" />
      </footer>
    </div>
  );
}
