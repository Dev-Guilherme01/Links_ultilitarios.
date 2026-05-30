import { ArrowLeft, ChevronRight, Info, ExternalLink } from 'lucide-react';
import type { Category } from '../types';

interface CategoryDetailProps {
  category: Category;
  onBack: () => void;
}

export default function CategoryDetail({ category, onBack }: CategoryDetailProps) {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      {/* Category header */}
      <header
        className="px-4 py-6 md:px-8 md:py-10"
        style={{ backgroundColor: category.color }}
      >
        <button
          onClick={onBack}
          className="mb-4 flex items-center gap-1.5 text-sm font-medium text-white/90 transition-opacity hover:text-white active:opacity-70 md:text-base"
          aria-label="Voltar para o início"
        >
          <ArrowLeft size={18} strokeWidth={2.5} />
          Voltar
        </button>

        <div className="flex items-center gap-4">
          <div className="flex-1">
            <h1 className="text-2xl font-extrabold leading-tight text-white md:text-3xl">{category.title}</h1>
            <p className="mt-1 text-sm text-white/85 md:text-base">{category.description}</p>
          </div>
        </div>
      </header>

      {/* Services list */}
      <main className="flex-1 px-3 py-4 md:px-8 md:py-8">
        <p className="mb-4 px-1 text-xs font-semibold uppercase tracking-wider text-gray-500 md:mb-6 md:text-sm">
          Selecione o serviço desejado
        </p>

        <ul className="grid gap-2.5 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-5">
          {category.services.map((service) => (
            <li key={service.id}>
              <a
                href={service.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3.5 shadow-sm transition-all duration-150 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] md:px-5 md:py-4"
                aria-label={`Acessar ${service.name}`}
              >
                {/* Color dot */}
                <div
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl md:h-11 md:w-11"
                  style={{ backgroundColor: category.lightColor }}
                >
                  <ExternalLink size={18} color={category.color} strokeWidth={2} className="md:h-5 md:w-5" />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[14px] font-semibold text-gray-800 md:text-base">{service.name}</p>
                  <p className="mt-0.5 text-[12px] leading-snug text-gray-500 md:text-sm">{service.description}</p>
                </div>

                <ChevronRight size={18} color="#9CA3AF" strokeWidth={2} className="flex-shrink-0 md:h-5 md:w-5" />
              </a>
            </li>
          ))}
        </ul>

        {/* Info tip */}
        <div
          className="mt-6 flex items-start gap-3 rounded-2xl px-4 py-3.5 shadow-sm md:mt-8 md:px-6 md:py-4"
          style={{ backgroundColor: category.lightColor }}
        >
          <div
            className="mt-0.5 flex-shrink-0 rounded-full p-1.5"
            style={{ backgroundColor: category.color + '33' }}
          >
            <Info size={16} color={category.color} strokeWidth={2} className="md:h-5 md:w-5" />
          </div>
          <p className="text-[12.5px] leading-relaxed md:text-sm" style={{ color: category.color }}>
            Clique no serviço desejado para acessar o site oficial.
          </p>
        </div>
      </main>
    </div>
  );
}
