import { useEffect, useState } from 'react';
import Header from './components/Header';
import SearchFilters from './components/SearchFilters';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const [filters, setFilters] = useState({
    search: '',
    area: '',
    cidade: '',
    tecnologia: '',
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const handleFiltersChange = (newFilters) =>
    setFilters((prev) => ({ ...prev, ...newFilters }));

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-slate-100 transition-colors">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main className="max-w-6xl mx-auto px-4 pb-12">
        <SearchFilters filters={filters} onChange={handleFiltersChange} />

        <h2 className="text-lg sm:text-xl font-semibold mb-2">
          Conectando talentos às profissões do futuro
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Em breve você vai conseguir explorar perfis de profissionais de IA, Automação,
          Web3 e Realidades Imersivas filtrando por área, cidade e tecnologias.
        </p>
      </main>
    </div>
  );
}

export default App;
