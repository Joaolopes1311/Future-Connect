function Header({ darkMode, toggleDarkMode }) {
  return (
    <header className="border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur sticky top-0 z-20">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">
            FutureConnect
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Rede de profissionais do futuro – IA, Automação, Web3 e Realidades Imersivas.
          </p>
        </div>

        <button
          onClick={toggleDarkMode}
          className="inline-flex items-center gap-2 text-xs sm:text-sm border border-slate-300 dark:border-slate-700 rounded-full px-3 py-1 bg-slate-50 dark:bg-slate-900"
        >
          <span>{darkMode ? 'Modo escuro' : 'Modo claro'}</span>
          <span>{darkMode ? '🌙' : '☀️'}</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
