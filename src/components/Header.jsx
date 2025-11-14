function Header({ darkMode, toggleDarkMode }) {
  return (
    <header className="border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur sticky top-0 z-20">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
            FutureConnect
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Rede de profissionais do futuro – IA, Automação, Web3 e Realidades Imersivas.
          </p>
        </div>

        {/* Botão de modo claro/escuro */}
        <button
          onClick={toggleDarkMode}
          className="
            inline-flex items-center gap-2 text-xs sm:text-sm font-medium
            rounded-full px-4 py-1.5
            border border-slate-300 dark:border-slate-700
            bg-slate-100 text-slate-900
            dark:bg-slate-900 dark:text-slate-100
            shadow-sm hover:bg-slate-200 dark:hover:bg-slate-800
            transition
          "
        >
          {/* mostra o modo QUE VAI SER ativado */}
          <span>{darkMode ? "Modo claro" : "Modo escuro"}</span>
          <span>{darkMode ? "☀️" : "🌙"}</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
