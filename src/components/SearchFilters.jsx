function SearchFilters({ filters, onChange }) {
  const handleChange = (field) => (e) => {
    onChange({ [field]: e.target.value });
  };

  return (
    <section className="bg-white/80 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 mt-6 mb-6 shadow-sm">
      <h2 className="text-sm font-semibold mb-3">
        Buscar profissionais do futuro
      </h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 text-sm">
        <div className="flex flex-col gap-1">
          <label className="text-xs text-slate-500">Nome ou cargo</label>
          <input
            type="text"
            value={filters.search}
            onChange={handleChange('search')}
            className="rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 px-3 py-2 outline-none text-sm"
            placeholder="Ex: Engenheiro de IA"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs text-slate-500">Área de atuação</label>
          <input
            type="text"
            value={filters.area}
            onChange={handleChange('area')}
            className="rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 px-3 py-2 outline-none text-sm"
            placeholder="Ex: IA, Web3, Automação..."
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs text-slate-500">Cidade</label>
          <input
            type="text"
            value={filters.cidade}
            onChange={handleChange('cidade')}
            className="rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 px-3 py-2 outline-none text-sm"
            placeholder="Ex: São Paulo, Lisboa..."
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs text-slate-500">Tecnologia / skill</label>
          <input
            type="text"
            value={filters.tecnologia}
            onChange={handleChange('tecnologia')}
            className="rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 px-3 py-2 outline-none text-sm"
            placeholder="Ex: React, Solidity, Python..."
          />
        </div>
      </div>
    </section>
  );
}

export default SearchFilters;
