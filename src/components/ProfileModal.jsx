function ProfileModal({ profile, onClose }) {
  const handleRecomendar = () => {
    alert(`Você recomendou ${profile.nome}!`);
  };

  const handleEnviarMensagem = () => {
    const msg = prompt(
      `Enviar mensagem para ${profile.nome}:`,
      "Olá! Gostaria de conversar sobre uma oportunidade..."
    );
    if (msg) {
      alert("Mensagem enviada com sucesso! (simulação)");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 flex justify-center items-center px-4">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 w-full max-w-3xl rounded-2xl shadow-xl max-h-[90vh] overflow-hidden flex flex-col">
        
        {/* HEADER */}
        <header className="flex justify-between items-start p-4 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <img
              src={profile.foto}
              alt={profile.nome}
              className="w-20 h-20 rounded-full object-cover border border-slate-300 dark:border-slate-700"
            />
            <div>
              <h2 className="text-xl font-semibold">{profile.nome}</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {profile.cargo}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-500">
                {profile.localizacao} • {profile.area}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="px-3 py-1 text-xs rounded-full border border-slate-300 dark:border-slate-700"
          >
            Fechar
          </button>
        </header>

        {/* CONTENT */}
        <div className="overflow-y-auto p-4 space-y-4 text-sm">

          {/* RESUMO */}
          <section>
            <h3 className="font-semibold mb-1">Resumo profissional</h3>
            <p className="text-slate-700 dark:text-slate-300">{profile.resumo}</p>
          </section>

          {/* FORMAÇÃO + IDIOMAS */}
          <section className="grid md:grid-cols-2 gap-4">
            
            <div>
              <h3 className="font-semibold mb-1">Formação acadêmica</h3>
              {profile.formacao?.map((f, i) => (
                <p key={i} className="text-slate-700 dark:text-slate-300">
                  <strong>{f.curso}</strong> — {f.instituicao} ({f.ano})
                </p>
              ))}
            </div>

            <div>
              <h3 className="font-semibold mb-1">Idiomas</h3>
              {profile.idiomas?.map((i, idx) => (
                <p key={idx} className="text-slate-700 dark:text-slate-300">
                  {i.idioma} — {i.nivel}
                </p>
              ))}
            </div>

          </section>

          {/* EXPERIÊNCIAS */}
          <section>
            <h3 className="font-semibold mb-1">Experiências</h3>
            <div className="space-y-3">
              {profile.experiencias?.map((exp, i) => (
                <div key={i}>
                  <p className="font-medium">
                    {exp.cargo} • {exp.empresa}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {exp.inicio} – {exp.fim}
                  </p>
                  <p className="text-xs mt-1">{exp.descricao}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SKILLS */}
          <section className="grid md:grid-cols-2 gap-4">

            <div>
              <h3 className="font-semibold mb-1">Hard Skills</h3>
              <div className="flex flex-wrap gap-1">
                {profile.habilidadesTecnicas?.map((skill) => (
                  <span
                    key={skill}
                    className="text-[10px] px-2 py-1 rounded-full bg-slate-200 dark:bg-slate-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-1">Soft Skills</h3>
              <div className="flex flex-wrap gap-1">
                {profile.softSkills?.map((skill) => (
                  <span
                    key={skill}
                    className="text-[10px] px-2 py-1 rounded-full bg-slate-200 dark:bg-slate-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </section>

          {/* PROJETOS */}
          <section>
            <h3 className="font-semibold mb-1">Projetos</h3>
            {profile.projetos?.map((p, i) => (
              <p key={i}>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-sky-400"
                >
                  {p.titulo}
                </a>
              </p>
            ))}
          </section>

          {/* CERTIFICAÇÕES */}
          <section>
            <h3 className="font-semibold mb-1">Certificações</h3>
            {profile.certificacoes?.map((c, i) => (
              <p key={i} className="text-slate-700 dark:text-slate-300">{c}</p>
            ))}
          </section>

          {/* INTERESSES */}
          <section>
            <h3 className="font-semibold mb-1">Temas de interesse</h3>
            <div className="flex flex-wrap gap-1">
              {profile.areainteresses?.map((area) => (
                <span
                  key={area}
                  className="text-[10px] px-2 py-1 rounded-full bg-slate-200 dark:bg-slate-800"
                >
                  {area}
                </span>
              ))}
            </div>
          </section>

        </div>

        {/* FOOTER */}
        <footer className="p-4 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
          <button
            onClick={handleRecomendar}
            className="px-3 py-1 text-xs rounded-full border border-emerald-500 text-emerald-400"
          >
            Recomendar
          </button>

          <button
            onClick={handleEnviarMensagem}
            className="px-3 py-1 text-xs rounded-full bg-sky-600 text-white"
          >
            Enviar mensagem
          </button>
        </footer>

      </div>
    </div>
  );
}

export default ProfileModal;
