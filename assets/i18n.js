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
    "idx.subtitle": "Sou mestrando em Economia. Trabalho com economia política, tanto teórica quanto aplicada, e me interesso por modelagem formal e inferência causal.",
    "idx.act.works": "Ver trabalhos",
    "idx.act.lecture": "Notas de aula",
    "idx.act.contact": "Contato",
    "idx.act.donation": "Doação",
    "idx.label": "Apresentação",
    "idx.h2": "O que estudo.",
    "idx.lead": "Interesso-me por como instituições e incentivos afetam decisões políticas. Gosto de pensar essas questões com modelos formais e, quando os dados permitem, com inferência causal.",
    "idx.fine": "Reúno aqui meus trabalhos e minhas anotações, além do material de estudo que preparo ao longo do caminho.",
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
    "idx.notes.p": "Anotações que faço enquanto estudo economia e compartilho por aqui caso sejam úteis a outras pessoas.",
    "idx.footer": "&copy; <span>2026</span> Joubert Cavalcante. Feito para o GitHub Pages.",

    // Works
    "title.works": "Trabalhos | Joubert Cavalcante",
    "wk.eyebrow": "Trabalhos",
    "wk.h1": "Artigos, projetos e notas de pesquisa.",
    "wk.motto": "Uma seleção da minha pesquisa em andamento e concluída.",
    "wk.label": "Seleção",
    "wk.h2": "Pesquisa",
    "wk.lead": "Artigos em elaboração, submissões, projetos de dados e replicação, notas técnicas e textos de divulgação.",
    "wk.k.paper": "Artigo em elaboração",
    "wk.k.project": "Projeto",
    "wk.k.note": "Nota",
    "wk.p1": "Um arcabouço não paramétrico para testar a estacionariedade espacial quando os choques institucionais não são observados, construído em torno de comparações contrafactuais. Manuscrito em avaliação.",
    "wk.tag.review": "Em avaliação",
    "wk.tag.paper": "Artigo em elaboração",
    "wk.tag.spatial": "Estacionariedade espacial",
    "wk.tag.counter": "Contrafactuais não paramétricos",
    "wk.h3.project": "Projeto de pesquisa ou base de dados",
    "wk.p.project": "Um projeto de dados ou replicação — código, documentação e resultados reproduzíveis.",
    "wk.tag.data": "Dados",
    "wk.tag.repl": "Replicação",
    "wk.h3.note": "Ensaio, artigo ou nota técnica",
    "wk.p.note": "Textos mais curtos — um ensaio, artigo expositivo ou nota técnica sobre um tema de economia.",
    "wk.tag.notes": "Notas",
    "wk.tag.ext": "Link externo",

    // Lecture Notes
    "title.teaching": "Notas de Aula | Joubert Cavalcante",
    "tc.eyebrow": "Notas de Aula",
    "tc.h1": "Notas de aula de pós-graduação.",
    "tc.motto": "Libera sit scientia.",
    "tc.subtitle": "Notas em teoria econômica, econometria, inferência causal e seus fundamentos matemáticos.",
    "tc.label": "Coleção",
    "tc.h2": "Notas em andamento",
    "tc.lead": "Cada título é autocontido e construído desde os primeiros princípios, de modo que pode ser lido sem depender de um curso específico. Tudo aqui é um trabalho em andamento, publicado à medida que fica pronto.",
    "tc.kicker": "Notas de aula",
    "tc.ra": "Análise Real: para Economistas",
    "tc.ra.p": "A base matemática para economistas — demonstrações, sequências, topologia, continuidade, diferenciação, compacidade e otimização.",
    "tc.prob": "Probabilidade e Inferência Estatística",
    "tc.prob.p": "Da probabilidade à inferência: distribuições, estimação, testes de hipóteses e as ideias assintóticas por trás da econometria.",
    "tc.econometrics": "Econometria",
    "tc.econometrics.p": "Regressão, estimação e inferência para dados econômicos, com atenção às hipóteses e à interpretação.",
    "tc.causal": "Inferência Causal",
    "tc.causal.p": "Resultados potenciais, identificação, experimentos e desenhos observacionais para perguntas causais.",
    "tc.micro": "Teoria Microeconômica",
    "tc.micro.p": "Da escolha individual aos mercados — teoria do consumidor e do produtor, equilíbrio, bem-estar, jogos, informação e estrutura de mercado.",
    "tc.gt": "Teoria dos Jogos",
    "tc.gt.p": "Jogos estratégicos e dinâmicos: conceitos de equilíbrio, jogos repetidos, informação e suas aplicações econômicas.",
    "tc.pe": "Economia Política",
    "tc.pe.p": "Como a política molda as políticas públicas — escolha coletiva, instituições, votação, redistribuição e agência política.",

    // ANPEC
    "title.anpec": "ANPEC | Joubert Cavalcante",
    "an.eyebrow": "ANPEC",
    "an.h1": "Preparação para a ANPEC.",
    "an.subtitle": "Notas de estudo e bancos de questões para o exame de admissão à pós-graduação em economia (ANPEC), organizados por disciplina para uma revisão objetiva.",
    "an.label": "Materiais",
    "an.h2": "Notas e bancos de questões por disciplina",
    "an.lead": "Quatro trilhas que combinam notas de estudo e bancos de questões para uma preparação focada para o exame.",
    "an.kicker": "Notas ANPEC",
    "an.questions": "Banco de questões ANPEC",
    "an.excel.kicker": "Mapa de questões em Excel",
    "an.excel.p": "Uma planilha que mapeia as questões deste banco ficará disponível aqui.",
    "an.math": "Matemática",
    "an.math.p": "Cálculo, álgebra linear e otimização, com as sequências, os sistemas e as rotinas de resolução de problemas que o exame cobra.",
    "an.micro": "Microeconomia",
    "an.micro.p": "Teoria do consumidor e da firma, equilíbrio e bem-estar, incerteza e interação estratégica.",
    "an.macro": "Macroeconomia",
    "an.macro.p": "Crescimento, economia monetária, IS-LM e economia aberta, inflação, expectativas e os principais debates de política.",
    "an.stat": "Estatística",
    "an.stat.p": "Da probabilidade e das distribuições à estimação, aos testes de hipóteses e à regressão — sempre atenta à interpretação.",

    // Contact
    "title.contact": "Contato | Joubert Cavalcante",
    "ct.eyebrow": "Contato",
    "ct.h1": "Contato e links acadêmicos.",
    "ct.label": "Links",
    "ct.h2": "Entre em contato",
    "ct.lead": "Para correspondência acadêmica, colaborações ou dúvidas sobre os materiais deste site, o e-mail é a melhor forma de falar comigo. Você também pode me encontrar pelos links abaixo.",
    "ct.email": "E-mail\n              <span>joubert.cavalcante@ufpe.br</span>",

    // Donation
    "title.donation": "Doação | Joubert Cavalcante",
    "dn.eyebrow": "Doação",
    "dn.h1": "Apoie notas de aula e diagramas abertos.",
    "dn.subtitle": "Todos os materiais deste site são de uso livre. As contribuições ajudam a mantê-los assim — financiando novas notas de aula, melhores diagramas e mais recursos didáticos.",
    "dn.label": "Apoio",
    "dn.h2": "Formas de contribuir",
    "dn.lead": "Qualquer valor é bem-vindo, e não há obrigação alguma — o material continua aberto de qualquer forma.",
    "dn.pix.copy": "Copiar chave Pix",
    "dn.paypal": "PayPal ou Stripe",
    "dn.paypal.link": "Abrir link de doação",
    "dn.other": "Outras formas de apoio",
    "dn.other.p": "Para livros, bolsas, colaborações ou apoio institucional, entre em contato e encontramos a melhor forma.",
    "dn.other.contact": "Contato",

    // 404
    "title.404": "Página não encontrada | Joubert Cavalcante",
    "nf.eyebrow": "Erro 404",
    "nf.h1": "Página não encontrada.",
    "nf.subtitle": "A página que você procura pode ter sido movida, renomeada ou nunca ter existido.",
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
