function ProfileCard({ profile, onClick }) {
  const principaisSkills = profile.habilidadesTecnicas.slice(0, 3);

  return (
    <button
      onClick={onClick}
      className="text-left bg-white/80 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-3"
    >
      <div className="flex items-center gap-3">
        <img
          src={profile.foto}
          alt={profile.nome}
          className="w-14 h-14 rounded-full object-cover border border-slate-200 dark:border-slate-700"
        />
        <div>
          <h3 className="font-semibold text-sm">{profile.nome}</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {profile.cargo}
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {profile.localizacao} • {profile.area}
          </p>
        </div>
      </div>

      <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2">
        {profile.resumo}
      </p>

      <div className="flex flex-wrap gap-1 mt-auto">
        {principaisSkills.map((skill) => (
          <span
            key={skill}
            className="text-[10px] px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-100"
          >
            {skill}
          </span>
        ))}
      </div>
    </button>
  );
}

export default ProfileCard;
