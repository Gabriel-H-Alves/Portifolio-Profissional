import { ProjectItem, GitHubRepoRaw } from "@/types/projects.types";
import { projects as staticFeaturedProjects } from "@/data/projects";

const GITHUB_USERNAME = "Gabriel-H-Alves";

/**
 * Mapeia e enriquece os repositórios do GitHub com textos amigáveis e estruturados
 */
export function formatGitHubRepoToProject(repo: GitHubRepoRaw, index: number): ProjectItem {
  const nameLower = repo.name.toLowerCase();
  const descLower = (repo.description || "").toLowerCase();
  const langLower = (repo.language || "").toLowerCase();

  let category: ProjectItem["category"] = "web";
  const techList: string[] = [];

  if (repo.language) {
    techList.push(repo.language);
  }

  // Categorização inteligente e detecção de stack
  if (langLower.includes("python") || nameLower.includes("python")) {
    category = "python";
    if (!techList.includes("Python")) techList.push("Python");
    if (nameLower.includes("logica") || nameLower.includes("exercicios")) {
      techList.push("Algoritmos", "Lógica de Programação");
    } else {
      techList.push("Automação", "Manipulação de Dados");
    }
  } else if (langLower.includes("java") || nameLower.includes("java")) {
    category = "java";
    if (!techList.includes("Java")) techList.push("Java");
    techList.push("Orientação a Objetos", "Backend");
  } else if (nameLower.includes("uipath") || nameLower.includes("automacao") || nameLower.includes("rpa")) {
    category = "automation";
    techList.push("UiPath", "RPA", "Automação de Processos");
  } else if (nameLower.includes("react") || techList.includes("TypeScript") || techList.includes("JavaScript")) {
    if (nameLower.includes("react") || nameLower.includes("portifolio")) {
      category = "web";
      techList.push("React", "Next.js", "TypeScript");
    } else {
      category = "web";
      techList.push("Desenvolvimento Web", "APIs REST");
    }
  }

  if (nameLower.includes("cep") || nameLower.includes("crud") || nameLower.includes("api")) {
    if (!techList.includes("API REST")) techList.push("API REST", "CRUD");
  }

  // Descrições amigáveis, profissionais e claras
  let friendlyDesc = repo.description;
  let fullDesc = "";
  let problem = "Desenvolver uma solução eficiente, modular e de fácil manutenção para atender aos requisitos técnicos do projeto.";
  let solution = `Construção da aplicação utilizando ${techList.slice(0, 3).join(", ")}, priorizando boas práticas de código limpo e arquitetura escalável.`;
  let result = "Projeto finalizado, testado e com controle de versão completo no GitHub.";

  if (!friendlyDesc) {
    if (nameLower.includes("portifolio")) {
      friendlyDesc = "Portfólio Profissional Interativo — Desenvolvido em Next.js com design futurista, sincronização com GitHub e módulos interativos.";
      fullDesc = "Plataforma de portfólio moderna desenvolvida com Next.js, React e TypeScript, trazendo integração em tempo real com a API do GitHub, visual inspirado em ficção científica e alta performance.";
      problem = "Apresentar minha trajetória, competências técnicas e repositórios de forma interativa, visualmente marcante e atualizada automaticamente.";
      solution = "Desenvolvimento de uma interface dinâmica com Next.js 14, animações suaves em CSS, consumo da API do GitHub e organização modular em componentes.";
      result = "Portfólio completo, responsivo para desktop e mobile, com carregamento rápido e sincronização contínua.";
    } else if (nameLower.includes("aprendendojava")) {
      friendlyDesc = "Módulo de estudos e prática de Programação Orientada a Objetos em Java com foco em backend.";
      fullDesc = "Repositório dedicado ao aprendizado e consolidação de conceitos fundamentais e avançados de Java, incluindo classes, encapsulamento, herança, polimorfismo e manipulação de coleções.";
      problem = "Dominar os pilares da Programação Orientada a Objetos e boas práticas de tipagem e estruturação em Java.";
      solution = "Implementação progressiva de exercícios, estruturas de dados e algoritmos com foco em código limpo.";
      result = "Base sólida desenvolvida em Java e padrões de arquitetura de backend.";
    } else if (nameLower.includes("crud-apicep")) {
      friendlyDesc = "Aplicação web de consulta e cadastro consumindo a API ViaCEP com operações completas de CRUD.";
      fullDesc = "Sistema para busca automática de endereços a partir do CEP com validação de campos, tratamento de erros e operações de criação, leitura, atualização e exclusão de registros.";
      problem = "Agilizar e automatizar o preenchimento de cadastros de endereço, evitando erros manuais de digitação.";
      solution = "Integração assíncrona com a API pública do ViaCEP, com validações de formulário e interface intuitiva.";
      result = "Preenchimento instantâneo de dados de localização com zero divergências nos cadastros realizados.";
    } else if (nameLower.includes("automacao-de-pesquisa-livros")) {
      friendlyDesc = "Automação de Processos (RPA) com UiPath para pesquisa e comparação automática de preços de livros.";
      fullDesc = "Robô de automação construído com UiPath para realizar scraping, extração de dados e comparação de preços de livros em lojas virtuais, gerando relatórios consolidados.";
      problem = "Pesquisa manual demorada e repetitiva de cotações de preços em diferentes sites de e-commerce.";
      solution = "Criação de um robô inteligente com seletores dinâmicos para extrair títulos, autores e valores automaticamente.";
      result = "Economia de tempo significativa, transformando um processo de horas em poucos segundos.";
    } else if (nameLower.includes("python")) {
      friendlyDesc = "Biblioteca de algoritmos, exercícios práticos e scripts de automação desenvolvidos em Python.";
      fullDesc = "Conjunto de resoluções de problemas computacionais, estruturas de dados fundamentais e rotinas de automação desenvolvidas em Python.";
      problem = "Praticar raciocínio lógico, eficiência algorítmica e manipulação de dados.";
      solution = "Implementação de funções e rotinas reutilizáveis aproveitando os recursos nativos do Python.";
      result = "Código testado, documentado e pronto para aplicação em desafios e projetos maiores.";
    } else {
      friendlyDesc = `Projeto de desenvolvimento de software em ${repo.language || "tecnologia"} com controle de versão.`;
      fullDesc = `Repositório com código fonte versionado e estruturado para o desenvolvimento de soluções em ${repo.language || "software"}.`;
    }
  } else {
    fullDesc = friendlyDesc;
  }

  // Nome formatado e amigável
  const cleanName = repo.name
    .replace(/[-_]/g, " ")
    .replace(/4sem/i, " (4º Semestre)")
    .replace(/PROA/i, "(PROA)");

  const idFormatted = `Projeto #${String(index + 1).padStart(2, "0")}`;
  const specText = repo.language ? `${repo.language} • Repositório Público` : "Repositório Público";

  return {
    id: idFormatted,
    name: cleanName,
    spec: specText,
    desc: friendlyDesc,
    fullDesc: fullDesc,
    problem: problem,
    solution: solution,
    result: result,
    tech: Array.from(new Set(techList)),
    status: repo.archived ? "prototype" : "deployed",
    category: category,
    icon: category,
    links: {
      code: repo.html_url,
      demo: repo.homepage || undefined,
    },
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    updatedAt: repo.pushed_at || repo.updated_at,
    isGitHub: true,
    cloneUrl: repo.clone_url,
    sizeKb: repo.size,
    defaultBranch: repo.default_branch,
  };
}

/**
 * Busca repositórios públicos da API do GitHub com cache inteligente
 */
export async function fetchGitHubProjects(): Promise<{
  projects: ProjectItem[];
  totalRepos: number;
  lastSync: string;
  source: "live" | "fallback";
}> {
  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&per_page=100`, {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.warn(`API do GitHub retornou status ${res.status}. Usando projetos locais.`);
      return {
        projects: staticFeaturedProjects,
        totalRepos: staticFeaturedProjects.length,
        lastSync: new Date().toISOString(),
        source: "fallback",
      };
    }

    const repos: GitHubRepoRaw[] = await res.json();

    // Filtra forks sem modificações autorais
    const nonForkRepos = repos.filter((r) => !r.fork || r.stargazers_count > 0 || r.size > 0);

    const gitHubProjects = nonForkRepos.map((repo, idx) => formatGitHubRepoToProject(repo, idx));

    return {
      projects: gitHubProjects,
      totalRepos: repos.length,
      lastSync: new Date().toISOString(),
      source: "live",
    };
  } catch (error) {
    console.error("Erro ao carregar repositórios do GitHub:", error);
    return {
      projects: staticFeaturedProjects,
      totalRepos: staticFeaturedProjects.length,
      lastSync: new Date().toISOString(),
      source: "fallback",
    };
  }
}
