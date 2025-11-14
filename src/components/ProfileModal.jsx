function ProfileModal({ profile, onClose }) {
  if (!profile) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-start sm:items-center justify-center bg-black/60 px-4 py-8">
      {/* Conteúdo do modal */}
      <div className="relative max-w-3xl w-full rounded-3xl bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
        {/* Cabeçalho */}
        <div className="flex items-start gap-4 px-6 py-5 border-b border-slate-200 dark:border-slate-800">
          <img
            src={profile.foto}
            alt={profile.nome}
            className="w-14 h-14 rounded-full object-cover border border-slate-200 dark:border-slate-600"
          />

          <div className="flex-1 min-w-0">
            <h2 className="text-lg font-semibold truncate">
              {profile.nome}
            </h2>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              {profile.cargo}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {profile.localizacao} • {profile.area}
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-full px-3 py-1 text-xs font-medium border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Fechar
          </button>
        </div>

        {/* Corpo */}
        <div className="px-6 py-5 space-y-5 text-sm">
          {/* Resumo */}
          <section>
            <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">
              Resumo profissional
            </h3>
            <p className="text-slate-700 dark:text-slate-300">
              {profile.resumo}
            </p>
          </section>

          {/* Formação + Idiomas */}
          <section className="grid sm:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">
                Formação acadêmica
              </h3>
              {profile.formacao?.map((f, idx) => (
                <p
                  key={idx}
                  className="text-slate-700 dark:text-slate-300"
                >
                  <span className="font-medium">{f.curso}</span> —{" "}
                  {f.instituicao} ({f.anoConclusao})
                </p>
              ))}
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">
                Idiomas
              </h3>
              {profile.idiomas?.map((idioma, idx) => (
                <p
                  key={idx}
                  className="text-slate-700 dark:text-slate-300"
                >
                  {idioma.idioma} — {idioma.nivel}
                </p>
              ))}
            </div>
          </section>

          {/* Experiências */}
          <section>
            <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">
              Experiências
            </h3>
            {profile.experiencias?.map((exp, idx) => (
              <div key={idx} className="mb-2">
                <p className="font-medium text-slate-800 dark:text-slate-200">
                  {exp.cargo} • {exp.empresa}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {exp.inicio} – {exp.fim}
                </p>
                <p className="text-slate-700 dark:text-slate-300">
                  {exp.descricao}
                </p>
              </div>
            ))}
          </section>

          {/* Hard e Soft Skills */}
          <section className="grid sm:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                Hard Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {profile.habilidadesTecnicas?.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-[11px] font-medium
                    bg-slate-100 text-slate-700 border border-slate-200
                    dark:bg-slate-800 dark:text-slate-100 dark:border-slate-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {profile.softSkills?.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-[11px] font-medium
                    bg-slate-100 text-slate-700 border border-slate-200
                    dark:bg-slate-800 dark:text-slate-100 dark:border-slate-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Projetos */}
          {profile.projetos && profile.projetos.length > 0 && (
            <section>
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">
                Projetos
              </h3>
              {profile.projetos.map((proj, idx) => (
                <p key={idx}>
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sky-600 dark:text-sky-400 hover:underline"
                  >
                    {proj.titulo}
                  </a>
                </p>
              ))}
            </section>
          )}

          {/* Certificações */}
          {profile.certificacoes && profile.certificacoes.length > 0 && (
            <section>
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">
                Certificações
              </h3>
              {profile.certificacoes.map((cert, idx) => (
                <p
                  key={idx}
                  className="text-slate-700 dark:text-slate-300"
                >
                  {cert}
                </p>
              ))}
            </section>
          )}

          {/* Temas de interesse */}
          {profile.areainteresses && profile.areainteresses.length > 0 && (
            <section>
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                Temas de interesse
              </h3>
              <div className="flex flex-wrap gap-2">
                {profile.areainteresses.map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1 rounded-full text-[11px] font-medium
                    bg-slate-100 text-slate-700 border border-slate-200
                    dark:bg-slate-800 dark:text-slate-100 dark:border-slate-600"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Rodapé com ações */}
        <div className="flex justify-between items-center gap-3 px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80">
          <button
            onClick={() => alert("Profissional recomendado com sucesso!")}
            className="px-4 py-2 rounded-full text-sm font-medium bg-emerald-600 text-white hover:bg-emerald-700 transition"
          >
            Recomendar
          </button>

          <button
            onClick={() => alert("Mensagem enviada (simulação)!")}
            className="px-4 py-2 rounded-full text-sm font-medium bg-sky-600 text-white hover:bg-sky-700 transition"
          >
            Enviar mensagem
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileModal;
