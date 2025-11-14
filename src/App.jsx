import { useEffect, useState } from "react";
import Header from "./components/Header";
import SearchFilters from "./components/SearchFilters";
import { profiles } from "./data/profiles";
import ProfileCard from "./components/ProfileCard";
import ProfileModal from "./components/ProfileModal";

function App() {
  // começa CLARO
  const [darkMode, setDarkMode] = useState(false);

  const [filters, setFilters] = useState({
    search: "",
    area: "",
    cidade: "",
    tecnologia: "",
  });

  const [selectedProfile, setSelectedProfile] = useState(null);

  // controla a classe "dark" no <html>
  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const handleFiltersChange = (newFilters) =>
    setFilters((prev) => ({ ...prev, ...newFilters }));

  // ---------- LÓGICA DOS FILTROS ----------
  const filteredProfiles = profiles.filter((p) => {
    const searchText = filters.search.trim().toLowerCase();
    const areaText = filters.area.trim().toLowerCase();
    const cidadeText = filters.cidade.trim().toLowerCase();
    const techText = filters.tecnologia.trim().toLowerCase();

    const matchesSearch =
      !searchText ||
      p.nome.toLowerCase().includes(searchText) ||
      p.cargo.toLowerCase().includes(searchText);

    const matchesArea =
      !areaText || p.area.toLowerCase().includes(areaText);

    const matchesCidade =
      !cidadeText || p.localizacao.toLowerCase().includes(cidadeText);

    const matchesTech =
      !techText ||
      p.habilidadesTecnicas.some((skill) =>
        skill.toLowerCase().includes(techText)
      );

    return matchesSearch && matchesArea && matchesCidade && matchesTech;
  });
  // ---------------------------------------

  // tema aplicado direto no container principal
  const appThemeClasses = darkMode
    ? "bg-slate-900 text-slate-100"
    : "bg-slate-100 text-slate-900";

  return (
    <div className={`min-h-screen transition-colors ${appThemeClasses}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main className="max-w-6xl mx-auto px-4 pb-12">
        <SearchFilters filters={filters} onChange={handleFiltersChange} />

        <p className="text-sm text-slate-700 dark:text-slate-400 mt-4 mb-2">
          {filteredProfiles.length} profissionais do futuro encontrados
        </p>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProfiles.map((p) => (
            <ProfileCard
              key={p.id}
              profile={p}
              onClick={() => setSelectedProfile(p)}
            />
          ))}
        </section>

        {selectedProfile && (
          <ProfileModal
            profile={selectedProfile}
            onClose={() => setSelectedProfile(null)}
          />
        )}

        <h2 className="text-lg sm:text-xl font-semibold mb-2 mt-8">
          Conectando talentos às profissões do futuro
        </h2>

        <p className="text-sm text-slate-700 dark:text-slate-300">
          A FutureConnect simula uma rede profissional focada em IA, Automação,
          Web3 e Realidades Imersivas, permitindo explorar competências,
          formações e interesses alinhados ao futuro do trabalho.
        </p>
      </main>
    </div>
  );
}

export default App;
