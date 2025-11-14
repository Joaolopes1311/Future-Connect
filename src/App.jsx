import { useEffect, useState } from 'react';
import Header from './components/Header';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-slate-100 transition-colors">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main className="max-w-6xl mx-auto px-4 py-6">
        <h2 className="text-lg sm:text-xl font-semibold mb-2">
          Conectando talentos às profissões do futuro
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Em breve aqui você vai conseguir explorar perfis de profissionais de IA, Automação,
          Web3 e Realidades Imersivas. Vamos construir o resto da interface passo a passo.
        </p>
      </main>
    </div>
  );
}

export default App;
