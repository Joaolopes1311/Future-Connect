# FutureConnect – Profissionais do Futuro

## 👥 Autoria
- **João Pedro Morra Lopes – RM 565737**  
- **Luan Shiba Felix – RM 565541**

---

# 📘 Sobre o Projeto

FutureConnect é uma plataforma desenvolvida para a Global Solution FIAP – 2º semestre de 2025, com foco em **tecnologias emergentes** e no **futuro do trabalho**.

A aplicação simula uma rede profissional onde é possível navegar, filtrar e visualizar perfis completos de **60 profissionais do futuro**, distribuídos entre áreas como:

- Inteligência Artificial  
- Automação & Robótica  
- Web3 / Blockchain  
- Realidades Imersivas (XR)  
- UX & Pesquisa  
- Cloud, Dados e Cibersegurança  

O objetivo é representar, de forma visual e funcional, uma experiência moderna de consulta profissional alinhada às competências emergentes que moldam o futuro do trabalho.

---

# 🎯 Objetivos da Aplicação

- Construir uma interface capaz de exibir **60 perfis profissionais completos**.
- Simular interações e funcionalidades presentes em redes profissionais modernas.
- Demonstrar compreensão sobre:
  - Hard skills e soft skills futuras
  - Áreas de interesse
  - Formação
  - Projetos e certificações
  - Idiomas
  - Experiências profissionais
- Permitir busca filtrada por:
  - Nome ou cargo
  - Área de atuação
  - Cidade
  - Tecnologias específicas

---

# 🧩 Funcionalidades Principais

### 🔍 Filtros Inteligentes
Filtragem por:
- Nome / Cargo  
- Área  
- Cidade  
- Tecnologias / Skills  

A filtragem é combinada (**lógica AND**), permitindo buscas refinadas.

---

### 🗂️ Cards de Profissionais
Cada card exibe:
- Foto  
- Nome  
- Cargo  
- Localização  
- Área de atuação  
- Resumo curto  
- Principais hard skills  

---

### 📄 Modal com Informações Completas
Ao clicar em um card, abre-se um modal contendo:

- Resumo profissional  
- Formação acadêmica  
- Experiências  
- Hard skills  
- Soft skills  
- Projetos com links  
- Certificações  
- Idiomas  
- Temas de interesse  

Na parte inferior, botões simulam interações:

- **Recomendar profissional** (alerta simulado)  
- **Enviar mensagem** (prompt para digitar e simulação de envio)

---

### 🌙 Modo Claro/Escuro
O usuário pode alternar entre:

- **Light Mode**
- **Dark Mode**

Implementado via Tailwind (`darkMode: 'class'`) e manipulação da classe `dark` no documento.

---

# 🛠️ Tecnologias Utilizadas

- **React**
- **Vite**
- **Tailwind CSS v4**
- **JavaScript (ES6+)**
- **RandomUser API (somente para fotos)**

Não há backend real: todos os dados são **locais**, conforme requisito da Global Solution.

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
    profiles.js   # gera 60 perfis simulados automaticamente
  App.jsx
  main.jsx
  index.css
tailwind.config.js
postcss.config.js
README.md


Dados dos Profissionais

Todos os perfis são gerados em src/data/profiles.js.

Cada um contém:

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



Como Executar Localmente

Pré-requisitos:

Node.js LTS

npm (ou yarn)

Passos:
# Clonar o repositório
git clone https://github.com/seu-usuario/future-connect.git

# Entrar no projeto
cd future-connect

# Instalar dependências
npm install

# Rodar o projeto
npm run dev