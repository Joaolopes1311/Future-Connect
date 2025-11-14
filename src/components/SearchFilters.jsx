function SearchFilters({ filters, onChange }) {
  const handleChange = (field) => (event) => {
    onChange({ [field]: event.target.value });
  };

  return (
    <section className="mt-6">
      <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm px-4 py-4 sm:px-6 sm:py-5">
        <h2 className="text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-100 mb-4">
          Buscar profissionais do futuro
        </h2>

        <div className="grid gap-4 md:grid-cols-4">
          {/* Nome / cargo */}
          <div>
            <label className="block text-xs font-medium text-slate-700 dark:text-slate-300">
              Nome ou cargo
            </label>
            <input
              type="text"
              value={filters.search}
              onChange={handleChange("search")}
              placeholder="Ex: Engenheiro de IA"
              className="mt-1 w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
            />
          </div>

          {/* Área de atuação */}
          <div>
            <label className="block text-xs font-medium text-slate-700 dark:text-slate-300">
              Área de atuação
            </label>
            <input
              type="text"
              value={filters.area}
              onChange={handleChange("area")}
              placeholder="Ex: IA, Web3, Automação..."
              className="mt-1 w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
            />
          </div>

          {/* Cidade */}
          <div>
            <label className="block text-xs font-medium text-slate-700 dark:text-slate-300">
              Cidade
            </label>
            <input
              type="text"
              value={filters.cidade}
              onChange={handleChange("cidade")}
              placeholder="Ex: São Paulo, Lisboa..."
              className="mt-1 w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
            />
          </div>

          {/* Tecnologia / skill */}
          <div>
            <label className="block text-xs font-medium text-slate-700 dark:text-slate-300">
              Tecnologia / skill
            </label>
            <input
              type="text"
              value={filters.tecnologia}
              onChange={handleChange("tecnologia")}
              placeholder="Ex: React, Solidity, Python..."
              className="mt-1 w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchFilters;
