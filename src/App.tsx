import { useState } from 'react';
import { Home as HomeIcon, HelpCircle, Info, MessageSquare } from 'lucide-react';
import { categories } from './data';
import type { Category } from './types';
import Home from './components/Home';
import CategoryDetail from './components/CategoryDetail';
import Tutorial from './components/Tutorial';
import About from './components/About';
import Feedback from './components/Feedback';

type TabType = 'home' | 'tutorial' | 'about' | 'feedback';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Tab Navigation */}
      <nav className="sticky top-0 z-40 border-b border-gray-300 bg-white shadow-sm">
        <div className="mx-auto flex max-w-6xl">
          <button
            onClick={() => {
              setActiveTab('home');
              setActiveCategory(null);
            }}
            className={`flex flex-1 items-center justify-center gap-2 py-3 px-4 font-semibold transition-colors md:flex-none md:px-6 ${
              activeTab === 'home'
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'border-b-2 border-transparent text-gray-600 hover:text-gray-900'
            }`}
            aria-label="Ir para página inicial"
          >
            <HomeIcon size={20} />
            <span className="hidden sm:inline">Início</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('tutorial');
              setActiveCategory(null);
            }}
            className={`flex flex-1 items-center justify-center gap-2 py-3 px-4 font-semibold transition-colors md:flex-none md:px-6 ${
              activeTab === 'tutorial'
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'border-b-2 border-transparent text-gray-600 hover:text-gray-900'
            }`}
            aria-label="Abrir tutorial de como usar"
          >
            <HelpCircle size={20} />
            <span className="hidden sm:inline">Como usar?</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('about');
              setActiveCategory(null);
            }}
            className={`flex flex-1 items-center justify-center gap-2 py-3 px-4 font-semibold transition-colors md:flex-none md:px-6 ${
              activeTab === 'about'
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'border-b-2 border-transparent text-gray-600 hover:text-gray-900'
            }`}
            aria-label="Sobre o Utilinks"
          >
            <Info size={20} />
            <span className="hidden sm:inline">Sobre</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('feedback');
              setActiveCategory(null);
            }}
            className={`flex flex-1 items-center justify-center gap-2 py-3 px-4 font-semibold transition-colors md:flex-none md:px-6 ${
              activeTab === 'feedback'
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'border-b-2 border-transparent text-gray-600 hover:text-gray-900'
            }`}
            aria-label="Enviar feedback"
          >
            <MessageSquare size={20} />
            <span className="hidden sm:inline">Feedback</span>
          </button>
        </div>
      </nav>

      {/* Content */}
      <div className="mx-auto max-w-6xl">
        {activeTab === 'home' ? (
          activeCategory ? (
            <CategoryDetail
              category={activeCategory}
              onBack={() => setActiveCategory(null)}
            />
          ) : (
            <Home categories={categories} onCategoryClick={setActiveCategory} />
          )
        ) : activeTab === 'tutorial' ? (
          <Tutorial onNavigate={setActiveTab} />
        ) : activeTab === 'about' ? (
          <About onNavigate={setActiveTab} />
        ) : (
          <Feedback onNavigate={setActiveTab} />
        )}
      </div>
    </div>
  );
}
