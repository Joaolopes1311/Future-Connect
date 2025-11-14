function ProfileCard({ profile, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm hover:shadow-md hover:-translate-y-[1px] transition p-4 sm:p-5"
    >
      <div className="flex gap-3">
        <img
          src={profile.foto}
          alt={profile.nome}
          className="w-12 h-12 rounded-full object-cover border border-slate-200 dark:border-slate-600"
        />

        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 truncate">
            {profile.nome}
          </h3>
          <p className="text-xs text-slate-700 dark:text-slate-300">
            {profile.cargo}
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {profile.localizacao} · {profile.area}
          </p>
        </div>
      </div>

      <p className="mt-3 text-xs text-slate-700 dark:text-slate-300 line-clamp-3">
        {profile.resumo}
      </p>

      <div className="mt-3 flex flex-wrap gap-2">
        {profile.habilidadesTecnicas.slice(0, 3).map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 rounded-full border text-[11px] font-medium bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </button>
  );
}

export default ProfileCard;
