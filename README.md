# 🚀 FutureConnect – Profissionais do Futuro  
### Global Solution FIAP – 2º Semestre de 2025

---

## 👥 Autoria
- **João Pedro Morra Lopes – RM 565737**  
- **Luan Shiba Felix – RM 565541**

---

# 📘 Sobre o Projeto

**FutureConnect** é uma plataforma web desenvolvida para a **Global Solution FIAP**, simulando uma rede profissional voltada para as carreiras do futuro do trabalho.

A aplicação apresenta **60 perfis profissionais completos**, cada um contendo:

- Informações pessoais e acadêmicas  
- Experiências profissionais  
- Hard e soft skills  
- Projetos  
- Certificações  
- Idiomas  
- Áreas de interesse  

Os perfis estão distribuídos entre áreas emergentes como:

- Inteligência Artificial  
- Automação e Robótica  
- Web3 / Blockchain  
- Realidades Imersivas (AR/VR/XR)  
- UX & Pesquisa  
- Cloud, Dados e Cibersegurança  

---

# 🔐 Usuários e Senhas

Este projeto **não possui autenticação ou login**.  
Não há usuários cadastrados e não existem senhas necessárias para acesso.  
Toda a navegação é livre, conforme permitido pelo enunciado da FIAP.

---

# 🎯 Objetivos da Aplicação

- Representar visualmente **60 profissionais fictícios** do futuro do trabalho.  
- Implementar filtros inteligentes para busca combinada:
  - Nome/Cargo  
  - Área de atuação  
  - Cidade  
  - Tecnologia ou skill  
- Exibir informações completas em um **modal interativo**.  
- Implementar **modo claro/escuro** via Tailwind.  
- Estruturar dados em JSON local.  
- Demonstrar domínio de tecnologias modernas de front-end.

---

# 🧩 Funcionalidades Principais

### 🔍 Filtros Inteligentes
Busca combinada por:
- Nome ou cargo  
- Área  
- Cidade  
- Tecnologias (skills)  

Todos os filtros funcionam simultaneamente (**lógica AND**).

---

### 🗂️ Cards de Profissionais
Cada card exibe:
- Foto  
- Nome  
- Cargo  
- Localização  
- Área  
- Hard skills principais  

---

### 📄 Modal com Informações Completas
Ao clicar em um card, abre-se um modal contendo:

- Resumo profissional  
- Formação acadêmica  
- Experiências  
- Hard skills  
- Soft skills  
- Projetos (com links clicáveis)  
- Certificações  
- Idiomas  
- Temas de interesse  

Na parte inferior existem ações simuladas:
- **Recomendar profissional** (alert)  
- **Enviar mensagem** (prompt para simulação)

---

### 🌙 Modo Claro/Escuro (Dark Mode)
- Alternância entre **Light Mode** e **Dark Mode**  
- Implementado com Tailwind (`darkMode: "class"`)  
- Classe `dark` adicionada/removida dinamicamente via React

---

# 🛠️ Tecnologias Utilizadas

- **React**  
- **Vite**  
- **Tailwind CSS (v4)**  
- **JavaScript ES6+**  
- **RandomUser API** (apenas para fotos)  
- JSON local para todos os dados dos perfis

Não há backend — toda a aplicação é client-side, conforme exigência da FIAP.

---

# 🏗️ Estrutura de Pastas

```bash
src/
  components/
    Header.jsx
    SearchFilters.jsx
    ProfileCard.jsx
    ProfileModal.jsx
  data/
    profiles.js   # gera automaticamente 60 perfis
  App.jsx
  main.jsx
  index.css

tailwind.config.js
postcss.config.js
README.md

🧾 Estrutura dos Dados (JSON)

Os perfis seguem o seguinte modelo:

{
  "id": 1,
  "nome": "Profissional Futuro 01",
  "foto": "...",
  "cargo": "...",
  "resumo": "...",
  "localizacao": "...",
  "area": "...",
  "habilidadesTecnicas": [...],
  "softSkills": [...],
  "experiencias": [...],
  "formacao": [...],
  "projetos": [...],
  "certificacoes": [...],
  "idiomas": [...],
  "areainteresses": [...]
}


🛠 Instalação do Projeto (passo a passo)
Pré-requisitos

Node.js (LTS)

npm ou yarn

Passos
# Clonar o repositório
git clone https://github.com/Joaolopes1311/Future-Connect.git

# Entrar na pasta do projeto
cd Future-Connect

# Instalar dependências
npm install

# Rodar o projeto
npm run dev

A aplicação abrirá em:

http://localhost:5173


🔗 Link do Repositório
Repositório GitHub:
👉 https://github.com/Joaolopes1311/Future-Connect
