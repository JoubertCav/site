(function () {
  "use strict";

  var storageKey = "jc-lang";
  var root = document.documentElement;
  var supported = ["en", "pt"];

  // English is the source of truth and lives in the HTML. Only the Portuguese
  // strings are stored here; switching back to English restores the cached
  // original markup, so there is no duplicate English dictionary to maintain.
  var pt = {
    // Shared chrome
    "skip": "Ir para o conteúdo",
    "badge.soon": "Em breve",
    "nav.presentation": "Apresentação",
    "nav.works": "Trabalhos",
    "nav.lecture": "Notas de Aula",
    "nav.anpec": "ANPEC",
    "nav.contact": "Contato",
    "nav.donation": "Doação",

    // Home
    "title.index": "Joubert Cavalcante | Economia Política",
    "idx.eyebrow": "Mestrando em Economia",
    "idx.subtitle": "Sou mestrando em Economia na Universidade Federal de Pernambuco (UFPE). Economia política é o que mais me interessa: por que agentes decidem o que decidem e quanto disso conseguimos explicar com modelos formais e, quando há bons dados, com inferência causal.",
    "idx.act.works": "Ver trabalhos",
    "idx.act.lecture": "Notas de aula",
    "idx.act.contact": "Contato",
    "idx.act.donation": "Doação",
    "idx.label": "Apresentação",
    "idx.h2": "Interesses, métodos e anotações.",
    "idx.lead": "Este site é onde reúno o que leio, o que anoto e o material de estudo que monto enquanto aprendo.",
    "idx.card.interests": "Interesses",
    "idx.i.pe": "Economia Política",
    "idx.i.gt": "Teoria dos Jogos",
    "idx.i.inst": "Instituições e Escolha Coletiva",
    "idx.i.elect": "Política Eleitoral",
    "idx.i.strat": "Comportamento Estratégico",
    "idx.card.tools": "Métodos e ferramentas",
    "idx.t.model": "Modelagem formal",
    "idx.t.causal": "Inferência causal",
    "idx.t.data": "Análise e visualização de dados",
    "idx.t.code": "Python / R para pesquisa em ciências sociais",
    "idx.card.notes": "Anotações",
    "idx.notes.p": "Escrevo anotações para ter certeza de que entendi. Ficam aqui caso sejam úteis a quem estuda o mesmo material.",
    "idx.footer": "&copy; <span>2026</span> Joubert Cavalcante. Hospedado no GitHub Pages.",

    // Works
    "title.works": "Trabalhos | Joubert Cavalcante",
    "wk.eyebrow": "Trabalhos",
    "wk.h1": "Artigos, projetos e notas de pesquisa.",
    "wk.motto": "As perguntas que segui longe o bastante para escrever algo sobre elas.",
    "wk.label": "Seleção",
    "wk.h2": "Pesquisa",
    "wk.lead": "Artigos em elaboração, exercícios de dados e replicação, e textos mais curtos: notas técnicas e escritos para um público mais amplo.",
    "wk.k.paper": "Artigo em elaboração",
    "wk.k.project": "Projeto",
    "wk.k.note": "Nota",
    "wk.p1": "Choques institucionais raramente ficam registrados, e por isso a estacionariedade espacial é difícil de testar. Em vez de supor uma forma funcional para choques que ninguém observa, o teste é construído a partir de comparações contrafactuais. Em avaliação.",
    "wk.tag.review": "Em avaliação",
    "wk.tag.paper": "Artigo em elaboração",
    "wk.tag.spatial": "Estacionariedade espacial",
    "wk.tag.counter": "Contrafactuais não paramétricos",
    "wk.h3.project": "Projeto de pesquisa ou base de dados",
    "wk.p.project": "Um projeto de dados ou replicação, com o código, a documentação e resultados que qualquer pessoa pode rodar de novo.",
    "wk.tag.data": "Dados",
    "wk.tag.repl": "Replicação",
    "wk.h3.note": "Ensaio, artigo ou nota técnica",
    "wk.p.note": "Algo mais curto: um ensaio, um texto expositivo ou uma nota técnica sobre uma única ideia da economia.",
    "wk.tag.notes": "Notas",
    "wk.tag.ext": "Link externo",

    // Lecture Notes
    "title.teaching": "Notas de Aula | Joubert Cavalcante",
    "tc.eyebrow": "Notas de Aula",
    "tc.h1": "Notas de aula de pós-graduação.",
    "tc.motto": "Libera sit scientia.",
    "tc.subtitle": "Notas de teoria econômica, econometria e inferência causal, com a matemática que elas exigem.",
    "tc.label": "Coleção",
    "tc.h2": "Notas em andamento",
    "tc.lead": "Escrevo cada título desde o início e procuro mantê-lo autocontido, de modo que não é preciso nenhum curso nem professor específico para ler. Nenhum está terminado: publico cada parte quando fico satisfeito com ela, em vez de esperar o livro inteiro.",
    "tc.kicker": "Notas de aula",
    "tc.ra": "Análise Real: para Economistas",
    "tc.ra.p": "Como ler e como escrever uma demonstração e, depois, sequências e topologia, continuidade e diferenciação, compacidade e os teoremas de otimização pressupostos em todo o resto da economia.",
    "tc.prob": "Probabilidade e Inferência Estatística",
    "tc.prob.p": "Distribuições e estimação, testes de hipóteses e os argumentos assintóticos por trás dos resultados econométricos usuais, demonstrados em vez de apenas citados.",
    "tc.econometrics": "Econometria",
    "tc.econometrics.p": "Regressão e inferência com dados econômicos, com cada hipótese enunciada de forma explícita e suas consequências desenvolvidas.",
    "tc.causal": "Inferência Causal",
    "tc.causal.p": "Resultados potenciais e identificação, experimentos e o que fazer quando o experimento que você queria é impossível.",
    "tc.micro": "Teoria Microeconômica",
    "tc.micro.p": "Da escolha de uma pessoa até um mercado inteiro: teoria do consumidor e do produtor, equilíbrio e bem-estar e, depois, jogos, informação e estrutura de mercado.",
    "tc.gt": "Teoria dos Jogos",
    "tc.gt.p": "Conceitos de equilíbrio para jogos estáticos e dinâmicos, o que muda quando o jogo se repete ou a informação é privada, e as aplicações econômicas de cada caso.",
    "tc.pe": "Economia Política",
    "tc.pe.p": "Como decisões políticas se tornam política pública: escolha coletiva e instituições, votação, redistribuição e se os eleitores conseguem de fato cobrar de quem ganha.",

    // ANPEC
    "title.anpec": "ANPEC | Joubert Cavalcante",
    "an.eyebrow": "ANPEC",
    "an.h1": "Preparação para a ANPEC.",
    "an.subtitle": "Notas de estudo e bancos de questões para o exame de admissão à pós-graduação em economia, organizados por disciplina para você se concentrar na que mais precisa.",
    "an.label": "Materiais",
    "an.h2": "Notas e bancos de questões por disciplina",
    "an.lead": "Quatro disciplinas. Para cada uma, notas para estudar e questões anteriores para testar se o estudo funcionou.",
    "an.kicker": "Notas ANPEC",
    "an.questions": "Banco de questões ANPEC",
    "an.excel.kicker": "Mapa de questões em Excel",
    "an.excel.p": "Aqui ficará uma planilha que mapeia cada questão deste banco por tema e por ano.",
    "an.math": "Matemática",
    "an.math.p": "Cálculo, álgebra linear e otimização, com as sequências, os sistemas e as rotinas de resolução mais exigidos pela prova.",
    "an.micro": "Microeconomia",
    "an.micro.p": "Teoria do consumidor e da firma, equilíbrio e bem-estar, escolha sob incerteza e interação estratégica.",
    "an.macro": "Macroeconomia",
    "an.macro.p": "Crescimento e economia monetária, IS-LM e economia aberta, inflação e expectativas, e os principais debates de política em torno deles.",
    "an.stat": "Estatística",
    "an.stat.p": "Probabilidade e distribuições e, depois, estimação, testes de hipóteses e regressão, sempre perguntando como interpretar um resultado, e não apenas como calculá-lo.",

    // Contact
    "title.contact": "Contato | Joubert Cavalcante",
    "ct.eyebrow": "Contato",
    "ct.h1": "Contato e links acadêmicos.",
    "ct.label": "Links",
    "ct.h2": "Entre em contato",
    "ct.lead": "E-mail é o jeito mais certeiro de me encontrar, seja sobre algo que escrevi, uma dúvida no material daqui ou um erro que você encontrou nele. Os links abaixo também funcionam.",
    "ct.email": "E-mail\n              <span>joubert.cavalcante@ufpe.br</span>",

    // Donation
    "title.donation": "Doação | Joubert Cavalcante",
    "dn.eyebrow": "Doação",
    "dn.h1": "Apoie notas de aula e diagramas abertos.",
    "dn.subtitle": "Tudo aqui é gratuito e vai continuar sendo. Se algum material te ajudou e você quiser retribuir, uso o que entra para escrever a próxima leva de anotações e desenhar diagramas melhores.",
    "dn.label": "Apoio",
    "dn.h2": "Formas de contribuir",
    "dn.lead": "Qualquer valor ajuda, e ninguém me deve nada: o material continua aberto de qualquer forma.",
    "dn.pix.copy": "Copiar chave Pix",
    "dn.paypal": "PayPal ou Stripe",
    "dn.paypal.link": "Abrir link de doação",
    "dn.other": "Outras formas de apoio",
    "dn.other.p": "Livros, bolsas, colaborações, apoio institucional: me escreva e a gente encontra o formato que fizer sentido.",
    "dn.other.contact": "Contato",

    // 404
    "title.404": "Página não encontrada | Joubert Cavalcante",
    "nf.eyebrow": "Erro 404",
    "nf.h1": "Página não encontrada.",
    "nf.subtitle": "Esta página foi movida, renomeada ou nunca existiu. Os links acima continuam funcionando.",
    "nf.act.home": "Voltar ao início",
    "nf.act.lecture": "Notas de aula"
  };

  var dict = { pt: pt };

  function preferredLang() {
    var saved = localStorage.getItem(storageKey);
    if (supported.indexOf(saved) !== -1) return saved;
    var browser = (navigator.language || "en").toLowerCase();
    return browser.indexOf("pt") === 0 ? "pt" : "en";
  }

  function currentLang() {
    return root.getAttribute("lang") === "pt" ? "pt" : "en";
  }

  function cacheOriginals() {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      if (el.dataset.i18nOriginal === undefined) el.dataset.i18nOriginal = el.innerHTML;
    });
  }

  // Theme-toggle label, localized. Mirrors theme.js semantics: the button
  // advertises the theme it will switch TO.
  var themeLabels = {
    en: { dark: "Light", light: "Dark" },
    pt: { dark: "Claro", light: "Escuro" }
  };

  // Exposed so theme.js can localize its label the moment the theme changes.
  window.jcThemeLabel = function (theme) {
    return themeLabels[currentLang()][theme === "dark" ? "dark" : "light"];
  };

  function applyThemeLabel() {
    var theme = root.dataset.theme === "dark" ? "dark" : "light";
    document.querySelectorAll("[data-theme-toggle]").forEach(function (button) {
      button.textContent = window.jcThemeLabel(theme);
    });
  }

  function applyLang(lang) {
    root.setAttribute("lang", lang);
    var t = dict[lang];

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.dataset.i18n;
      if (t && t[key] !== undefined) {
        el.innerHTML = t[key];
      } else if (el.dataset.i18nOriginal !== undefined) {
        el.innerHTML = el.dataset.i18nOriginal;
      }
    });

    document.querySelectorAll("[data-lang-toggle]").forEach(function (button) {
      button.textContent = lang === "pt" ? "EN" : "PT";
      button.setAttribute("aria-label", lang === "pt" ? "Switch to English" : "Mudar para português");
      button.setAttribute("aria-pressed", lang === "pt" ? "true" : "false");
    });

    applyThemeLabel();
  }

  cacheOriginals();
  applyLang(preferredLang());

  document.addEventListener("DOMContentLoaded", function () {
    cacheOriginals();
    applyLang(preferredLang());
    document.querySelectorAll("[data-lang-toggle]").forEach(function (button) {
      button.addEventListener("click", function () {
        var next = currentLang() === "pt" ? "en" : "pt";
        localStorage.setItem(storageKey, next);
        applyLang(next);
      });
    });
  });

  // Keep the theme label localized when the theme is toggled.
  document.addEventListener("jc:themechange", applyThemeLabel);
})();
