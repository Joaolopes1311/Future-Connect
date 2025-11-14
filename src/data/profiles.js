const baseProfiles = [
  {
    id: 1,
    nome: "Profissional Futuro 01",
    foto: "https://randomuser.me/api/portraits/men/11.jpg",
    cargo: "Engenheiro(a) de IA",
    resumo:
      "Profissional de Inteligência Artificial focado em soluções para o futuro do trabalho e automação responsável.",
    localizacao: "São Paulo/SP",
    area: "Inteligência Artificial",
    habilidadesTecnicas: ["Python", "TensorFlow", "LLMs", "MLOps"],
    softSkills: ["Comunicação", "Pensamento crítico", "Colaboração", "Criatividade"],
    experiencias: [
      {
        empresa: "FutureLabs",
        cargo: "Engenheiro(a) de IA",
        inicio: "2022",
        fim: "Atual",
        descricao:
          "Atua em projetos de IA aplicada ao futuro do trabalho, criando copilots e automações inteligentes.",
      },
    ],
    formacao: [
      {
        curso: "Engenharia de Software",
        instituicao: "FIAP",
        ano: "2025",
      },
    ],
    projetos: [
      {
        titulo: "Copilot para times corporativos",
        link: "https://example.com/projeto-ia",
      },
    ],
    certificacoes: ["Certificação em Cloud", "Curso de IA aplicada ao trabalho"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" },
      { idioma: "Inglês", nivel: "Intermediário" },
    ],
    areainteresses: ["IA ética", "Educação contínua", "Trabalho remoto", "Inovação aberta"],
  },
  {
    id: 2,
    nome: "Profissional Futuro 02",
    foto: "https://randomuser.me/api/portraits/women/12.jpg",
    cargo: "Desenvolvedor(a) Web3",
    resumo:
      "Profissional de Web3 & Blockchain focado em aplicativos descentralizados e novas formas de organização do trabalho.",
    localizacao: "Rio de Janeiro/RJ",
    area: "Web3 & Blockchain",
    habilidadesTecnicas: ["Solidity", "React", "Node.js", "Ethers.js", "Smart Contracts"],
    softSkills: ["Resiliência", "Pensamento crítico", "Autonomia", "Trabalho em equipe"],
    experiencias: [
      {
        empresa: "ChainVision",
        cargo: "Desenvolvedor(a) Web3",
        inicio: "2021",
        fim: "Atual",
        descricao:
          "Cria dApps e smart contracts para casos de uso corporativos e governança digital.",
      },
    ],
    formacao: [
      {
        curso: "Sistemas de Informação",
        instituicao: "USP",
        ano: "2024",
      },
    ],
    projetos: [
      {
        titulo: "Plataforma de votação descentralizada",
        link: "https://example.com/projeto-web3",
      },
    ],
    certificacoes: ["Ethereum Developer Certification"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" },
      { idioma: "Inglês", nivel: "Avançado" },
    ],
    areainteresses: ["DeFi", "Identidade digital", "Tokenização", "DAO"],
  },
  {
    id: 3,
    nome: "Profissional Futuro 03",
    foto: "https://randomuser.me/api/portraits/men/13.jpg",
    cargo: "Product Designer XR",
    resumo:
      "Designer de experiências imersivas para treinamento corporativo e educação técnica.",
    localizacao: "Lisboa/PT",
    area: "Realidades Imersivas (XR)",
    habilidadesTecnicas: ["Unity", "Figma", "C#", "UX Research", "3D Modeling"],
    softSkills: ["Empatia", "Criatividade", "Comunicação", "Colaboração"],
    experiencias: [
      {
        empresa: "XR Studio",
        cargo: "Product Designer XR",
        inicio: "2020",
        fim: "Atual",
        descricao:
          "Desenvolve experiências em VR e AR para qualificação profissional e simulações realistas.",
      },
    ],
    formacao: [
      {
        curso: "Design Digital",
        instituicao: "IP Lisboa",
        ano: "2023",
      },
    ],
    projetos: [
      {
        titulo: "Treinamento VR para técnicos de campo",
        link: "https://example.com/projeto-xr",
      },
    ],
    certificacoes: ["Google UX Design", "Unity Certified User"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" },
      { idioma: "Inglês", nivel: "Avançado" },
      { idioma: "Espanhol", nivel: "Intermediário" },
    ],
    areainteresses: ["Educação imersiva", "Acessibilidade", "Design inclusivo", "XR para saúde"],
  },
  {
    id: 4,
    nome: "Profissional Futuro 04",
    foto: "https://randomuser.me/api/portraits/women/14.jpg",
    cargo: "Engenheiro(a) de Automação",
    resumo:
      "Profissional de Automação & Robótica focado em robôs colaborativos e Indústria 4.0.",
    localizacao: "Curitiba/PR",
    area: "Automação & Robótica",
    habilidadesTecnicas: ["C++", "ROS", "PLC", "IoT", "Automação Industrial"],
    softSkills: ["Resolução de problemas", "Organização", "Foco", "Trabalho em equipe"],
    experiencias: [
      {
        empresa: "AutoRobotics",
        cargo: "Engenheiro(a) de Automação",
        inicio: "2019",
        fim: "Atual",
        descricao:
          "Desenvolve e implementa soluções de automação inteligente para linhas de produção.",
      },
    ],
    formacao: [
      {
        curso: "Engenharia de Controle e Automação",
        instituicao: "UTFPR",
        ano: "2022",
      },
    ],
    projetos: [
      {
        titulo: "Robô de inspeção autônoma",
        link: "https://example.com/projeto-automacao",
      },
    ],
    certificacoes: ["Siemens PLC Specialist"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" },
      { idioma: "Inglês", nivel: "Intermediário" },
    ],
    areainteresses: ["Indústria 4.0", "Robótica colaborativa", "IoT Industrial", "Sustentabilidade"],
  },
];

// Gera 60 perfis a partir dos 4 modelos base
export const profiles = Array.from({ length: 60 }, (_, index) => {
  const base = baseProfiles[index % baseProfiles.length];
  const id = index + 1;

  return {
    ...base,
    id,
    nome: `Profissional Futuro ${String(id).padStart(2, "0")}`,
    foto: `https://randomuser.me/api/portraits/${
      id % 2 === 0 ? "women" : "men"
    }/${10 + id}.jpg`,
    localizacao: [
      "São Paulo/SP",
      "Rio de Janeiro/RJ",
      "Belo Horizonte/MG",
      "Curitiba/PR",
      "Porto Alegre/RS",
      "Recife/PE",
      "Salvador/BA",
      "Lisboa/PT",
      "Porto/PT",
      "Madrid/ES",
    ][id % 10],
  };
});
