"use strict";

/* ---------- Dicionário de idiomas ---------- */
const DICIONARIO = {
  pt: {
    "nav.servicos": "Serviços",
    "nav.galeria": "Galeria",
    "nav.videos": "Vídeos",
    "nav.sobre": "Sobre",
    "nav.espaco": "Nosso Espaço",
    "acao.agendar": "Agendar",
    "horarios.summary": "Horários e local",
    "horarios.titulo": "Horários",
    "horarios.endereco": "Endereço",
    "horarios.segsex": "Segunda a sexta",
    "horarios.sab": "Sábado",
    "horarios.dom": "Domingo",
    "horarios.fechado": "Fechado",
    "horarios.comochegar": "Como chegar",
    "horarios.localizacao": "Localização",
    "horarios.desktopLinha1": "Segunda a sexta: 09h às 20h",
    "horarios.desktopLinha2": "Sábado: 08h às 18h. Domingo: fechado.",
    "hero.tag": "Barbershop e Hair Style",
    "hero.lead": "Corte na régua, barba bem desenhada e o cuidado de quem entende de cabelo. Chegue, sente e saia do seu jeito.",
    "hero.verservicos": "Ver serviços e preços",
    "vitrine.slide1": "Fade com risca",
    "vitrine.slide2": "Trança nagô",
    "vitrine.slide3": "Corte com desenho e coloração",
    "vitrine.slide4": "Box braids com miçangas",
    "vitrine.slide5": "Trança colorida com coque",
    "vitrine.slide6": "Trança nagô, comprimento total",
    "corte.nome": "Corte",
    "corte.desc": "Na régua, com acabamento na navalha.",
    "barba.nome": "Barba",
    "barba.desc": "Desenho preciso e toalha quente.",
    "sobrancelha.nome": "Sobrancelha",
    "sobrancelha.desc": "Na navalha, com traço natural.",
    "pigmentacao.nome": "Pigmentação",
    "pigmentacao.desc": "Disfarça falhas e reforça o desenho.",
    "hairline.nome": "Hairline (pezinho)",
    "hairline.desc": "Contorno alinhado, visual sempre em dia.",
    "platinado.nome": "Platinado",
    "platinado.desc": "Transformação completa, visual de destaque.",
    "luzes.nome": "Luzes",
    "luzes.desc": "Mechas naturais, sem perder a raiz.",
    "trancas.nome": "Tranças e cacheados",
    "trancas.desc": "Estilo autêntico, feito para durar.",
    "protese.nome": "Prótese capilar fio a fio",
    "protese.desc": "Densidade natural, resultado indetectável.",
    "galeria.titulo": "Nossos trabalhos",
    "galeria.vazio": "Nenhum trabalho nessa categoria ainda.",
    "filtro.todos": "Todos",
    "filtro.cortes": "Cortes",
    "filtro.barbas": "Barbas",
    "filtro.sobrancelhas": "Sobrancelhas",
    "filtro.pigmentacoes": "Pigmentações",
    "filtro.hairline": "Hairline",
    "filtro.platinados": "Platinados",
    "filtro.luzes": "Luzes",
    "filtro.trancas": "Tranças",
    "filtro.proteses": "Próteses capilares",
    "videos.titulo": "Veja em vídeo",
    "videos.lead": "Um gostinho do resultado em movimento. Toque para assistir.",
    "sobre.titulo": "Um espaço para se cuidar sem pressa",
    "sobre.p1": "O Studio B'Sant nasceu da vontade de unir a tradição da barbearia com o olhar atual do hair style. Cada atendimento é feito com hora marcada, para você ser atendido sem fila e sem correria.",
    "sobre.p2": "Ferramentas higienizadas, produtos de qualidade e conversa boa fazem parte do serviço.",
    "espaco.titulo": "Nosso espaço",
    "espaco.lead": "Um ambiente pensado para você relaxar enquanto é atendido."
  },
  en: {
    "nav.servicos": "Services",
    "nav.galeria": "Gallery",
    "nav.videos": "Videos",
    "nav.sobre": "About",
    "nav.espaco": "Our Space",
    "acao.agendar": "Book now",
    "horarios.summary": "Hours & location",
    "horarios.titulo": "Hours",
    "horarios.endereco": "Address",
    "horarios.segsex": "Monday to Friday",
    "horarios.sab": "Saturday",
    "horarios.dom": "Sunday",
    "horarios.fechado": "Closed",
    "horarios.comochegar": "Get directions",
    "horarios.localizacao": "Location",
    "horarios.desktopLinha1": "Monday to Friday: 9am to 8pm",
    "horarios.desktopLinha2": "Saturday: 8am to 6pm. Sunday: closed.",
    "hero.tag": "Barbershop & Hair Style",
    "hero.lead": "A precision cut, a sharp beard, and the care of people who know hair. Come in, sit back, and leave looking like yourself.",
    "hero.verservicos": "See services & prices",
    "vitrine.slide1": "Fade with part line",
    "vitrine.slide2": "Nagô braids",
    "vitrine.slide3": "Cut with design & color",
    "vitrine.slide4": "Box braids with beads",
    "vitrine.slide5": "Colored braid with bun",
    "vitrine.slide6": "Nagô braids, full length",
    "corte.nome": "Haircut",
    "corte.desc": "Precision cut, finished with a razor.",
    "barba.nome": "Beard",
    "barba.desc": "Precise shaping with a hot towel.",
    "sobrancelha.nome": "Eyebrows",
    "sobrancelha.desc": "Razor-shaped, natural line.",
    "pigmentacao.nome": "Pigmentation",
    "pigmentacao.desc": "Conceals gaps and sharpens the shape.",
    "hairline.nome": "Hairline touch-up",
    "hairline.desc": "Clean outline, always fresh.",
    "platinado.nome": "Platinum bleach",
    "platinado.desc": "Full transformation, standout look.",
    "luzes.nome": "Highlights",
    "luzes.desc": "Natural highlights without losing the root.",
    "trancas.nome": "Braids & curls",
    "trancas.desc": "Authentic style, made to last.",
    "protese.nome": "Strand-by-strand hair system",
    "protese.desc": "Natural density, undetectable result.",
    "galeria.titulo": "Our work",
    "galeria.vazio": "No work in this category yet.",
    "filtro.todos": "All",
    "filtro.cortes": "Haircuts",
    "filtro.barbas": "Beards",
    "filtro.sobrancelhas": "Eyebrows",
    "filtro.pigmentacoes": "Pigmentation",
    "filtro.hairline": "Hairline",
    "filtro.platinados": "Platinum",
    "filtro.luzes": "Highlights",
    "filtro.trancas": "Braids",
    "filtro.proteses": "Hair systems",
    "videos.titulo": "Watch the videos",
    "videos.lead": "A taste of the result in motion. Tap to watch.",
    "sobre.titulo": "A space to take your time",
    "sobre.p1": "Studio B'Sant was born from wanting to blend barbershop tradition with a modern take on hair style. Every appointment is scheduled, so you're seen without lines or rush.",
    "sobre.p2": "Sanitized tools, quality products, and good conversation are all part of the service.",
    "espaco.titulo": "Our space",
    "espaco.lead": "A space designed for you to relax while you're attended."
  },
  es: {
    "nav.servicos": "Servicios",
    "nav.galeria": "Galería",
    "nav.videos": "Videos",
    "nav.sobre": "Nosotros",
    "nav.espaco": "Nuestro Espacio",
    "acao.agendar": "Reservar",
    "horarios.summary": "Horario y ubicación",
    "horarios.titulo": "Horarios",
    "horarios.endereco": "Dirección",
    "horarios.segsex": "Lunes a viernes",
    "horarios.sab": "Sábado",
    "horarios.dom": "Domingo",
    "horarios.fechado": "Cerrado",
    "horarios.comochegar": "Cómo llegar",
    "horarios.localizacao": "Ubicación",
    "horarios.desktopLinha1": "Lunes a viernes: 9h a 20h",
    "horarios.desktopLinha2": "Sábado: 8h a 18h. Domingo: cerrado.",
    "hero.tag": "Barbería & Hair Style",
    "hero.lead": "Corte preciso, barba bien definida y el cuidado de quien entiende de cabello. Llega, siéntate y sal con tu propio estilo.",
    "hero.verservicos": "Ver servicios y precios",
    "vitrine.slide1": "Fade con raya",
    "vitrine.slide2": "Trenzas nagô",
    "vitrine.slide3": "Corte con diseño y color",
    "vitrine.slide4": "Box braids con cuentas",
    "vitrine.slide5": "Trenza de color con moño",
    "vitrine.slide6": "Trenzas nagô, largo completo",
    "corte.nome": "Corte",
    "corte.desc": "A regla, con acabado a navaja.",
    "barba.nome": "Barba",
    "barba.desc": "Diseño preciso y toalla caliente.",
    "sobrancelha.nome": "Cejas",
    "sobrancelha.desc": "A navaja, con trazo natural.",
    "pigmentacao.nome": "Pigmentación",
    "pigmentacao.desc": "Disimula huecos y refuerza el diseño.",
    "hairline.nome": "Hairline (contorno)",
    "hairline.desc": "Contorno alineado, siempre al día.",
    "platinado.nome": "Platinado",
    "platinado.desc": "Transformación completa, look llamativo.",
    "luzes.nome": "Mechas",
    "luzes.desc": "Mechas naturales, sin perder la raíz.",
    "trancas.nome": "Trenzas y rizos",
    "trancas.desc": "Estilo auténtico, hecho para durar.",
    "protese.nome": "Prótesis capilar hebra a hebra",
    "protese.desc": "Densidad natural, resultado indetectable.",
    "galeria.titulo": "Nuestros trabajos",
    "galeria.vazio": "Aún no hay trabajos en esta categoría.",
    "filtro.todos": "Todos",
    "filtro.cortes": "Cortes",
    "filtro.barbas": "Barbas",
    "filtro.sobrancelhas": "Cejas",
    "filtro.pigmentacoes": "Pigmentaciones",
    "filtro.hairline": "Hairline",
    "filtro.platinados": "Platinados",
    "filtro.luzes": "Mechas",
    "filtro.trancas": "Trenzas",
    "filtro.proteses": "Prótesis capilares",
    "videos.titulo": "Mira los videos",
    "videos.lead": "Un vistazo del resultado en movimiento. Toca para ver.",
    "sobre.titulo": "Un espacio para cuidarte sin prisa",
    "sobre.p1": "Studio B'Sant nació de las ganas de unir la tradición de la barbería con una mirada actual del hair style. Cada atención se hace con hora marcada, para que seas atendido sin filas ni prisa.",
    "sobre.p2": "Herramientas higienizadas, productos de calidad y buena conversación forman parte del servicio.",
    "espaco.titulo": "Nuestro espacio",
    "espaco.lead": "Un ambiente pensado para que te relajes mientras te atienden."
  }
};

function aplicarIdioma(lang) {
  const textos = DICIONARIO[lang];
  if (!textos) return;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const chave = el.dataset.i18n;
    if (textos[chave]) el.textContent = textos[chave];
  });

  document.documentElement.lang = lang === "pt" ? "pt-BR" : lang;
  localStorage.setItem("bsant-idioma", lang);

  document.querySelectorAll(".idioma-btn").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.lang === lang);
  });
}

const header = document.getElementById("header");
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
const abaBtn = document.getElementById("btn-funcionamento");
const aba = document.getElementById("aba-informacoes");

/* ---------- Ano no rodapé (só se existir) ---------- */
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

/* ---------- Sombra no cabeçalho ao rolar ---------- */
const updateHeader = () => header.classList.toggle("scrolled", window.scrollY > 8);
window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

/* ---------- Menu mobile ---------- */
const info = document.querySelector(".nav-info details");

function setMenu(open) {
  nav.classList.toggle("open", open);
  menuBtn.setAttribute("aria-expanded", String(open));
  menuBtn.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  if (!open && info) info.open = false;
}

menuBtn.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
nav.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });

/* ---------- Aba "Horários e local" (computador) ---------- */
function setAba(open) {
  aba.classList.toggle("mostrar", open);
  abaBtn.setAttribute("aria-expanded", String(open));
}

if (abaBtn && aba) {
  abaBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    setAba(!aba.classList.contains("mostrar"));
  });

  document.addEventListener("click", (e) => {
    if (!aba.contains(e.target) && e.target !== abaBtn) setAba(false);
  });
}

/* ---------- Esc fecha menu e aba ---------- */
document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  setMenu(false);
  if (abaBtn && aba) setAba(false);
});

/* ---------- Seletor de idioma ---------- */
document.querySelectorAll(".idioma-btn").forEach((btn) => {
  btn.addEventListener("click", () => aplicarIdioma(btn.dataset.lang));
});
aplicarIdioma(localStorage.getItem("bsant-idioma") || "pt");

/* ---------- Vitrine: carrossel de fotos em destaque ---------- */
const vitrineTrack = document.getElementById("vitrineTrack");
const vitrinePrev = document.getElementById("vitrinePrev");
const vitrineNext = document.getElementById("vitrineNext");
const vitrineDotsBox = document.getElementById("vitrineDots");

if (vitrineTrack) {
  const slides = vitrineTrack.querySelectorAll(".vitrine-slide");
  const total = slides.length;
  let indice = 0;
  let timer = null;

  slides.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "vitrine-dot";
    dot.setAttribute("aria-label", `Ir para a foto ${i + 1}`);
    dot.addEventListener("click", () => irPara(i));
    vitrineDotsBox.appendChild(dot);
  });
  const dots = vitrineDotsBox.querySelectorAll(".vitrine-dot");

  function atualizar() {
    vitrineTrack.style.transform = `translateX(-${indice * 100}%)`;
    dots.forEach((dot, i) => dot.classList.toggle("is-active", i === indice));
  }

  function irPara(i) {
    indice = (i + total) % total;
    atualizar();
    reiniciarAutoplay();
  }

  function proximo() { irPara(indice + 1); }
  function anterior() { irPara(indice - 1); }

  const semMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function iniciarAutoplay() {
    if (semMovimento) return;
    timer = setInterval(() => {
      indice = (indice + 1) % total;
      atualizar();
    }, 4500);
  }

  function pararAutoplay() {
    if (timer) clearInterval(timer);
  }

  function reiniciarAutoplay() {
    pararAutoplay();
    iniciarAutoplay();
  }

  vitrineNext.addEventListener("click", proximo);
  vitrinePrev.addEventListener("click", anterior);

  const vitrineContainer = vitrineTrack.closest(".vitrine");
  vitrineContainer.addEventListener("mouseenter", pararAutoplay);
  vitrineContainer.addEventListener("mouseleave", iniciarAutoplay);

  atualizar();
  iniciarAutoplay();
}

/* ---------- Galeria: filtro por categoria ---------- */
const filtroBtns = document.querySelectorAll(".filtro-btn");
const galeriaItens = document.querySelectorAll(".galeria-item");
const galeriaVazio = document.querySelector(".galeria-vazio");

filtroBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filtroBtns.forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");

    const categoria = btn.dataset.filtro;
    let algumVisivel = false;

    galeriaItens.forEach((item) => {
      const mostra = categoria === "todos" || item.dataset.categoria === categoria;
      item.classList.toggle("is-oculto", !mostra);
      if (mostra) algumVisivel = true;
    });

    if (galeriaVazio) galeriaVazio.hidden = algumVisivel;
  });
});

/* ---------- Galeria: lightbox (ampliar foto, com zoom) ---------- */
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxFechar = document.getElementById("lightboxFechar");

function abrirLightbox(src, alt) {
  lightboxImg.src = src;
  lightboxImg.alt = alt;
  lightbox.hidden = false;
}

function fecharLightbox() {
  lightbox.hidden = true;
  lightboxImg.src = "";
  lightboxImg.classList.remove("is-zoomed");
  lightbox.classList.remove("is-zoomed");
}

function alternarZoom() {
  const zoom = lightboxImg.classList.toggle("is-zoomed");
  lightbox.classList.toggle("is-zoomed", zoom);
  if (zoom) {
    requestAnimationFrame(() => {
      lightbox.scrollLeft = (lightbox.scrollWidth - lightbox.clientWidth) / 2;
      lightbox.scrollTop = (lightbox.scrollHeight - lightbox.clientHeight) / 2;
    });
  }
}

lightboxImg.addEventListener("click", (e) => {
  e.stopPropagation();
  alternarZoom();
});

document.querySelectorAll(".galeria-foto").forEach((botao) => {
  botao.addEventListener("click", () => {
    const img = botao.querySelector("img");
    abrirLightbox(img.src, img.alt);
  });
});

lightboxFechar.addEventListener("click", fecharLightbox);
lightbox.addEventListener("click", (e) => { if (e.target === lightbox) fecharLightbox(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !lightbox.hidden) fecharLightbox(); });

/* ---------- Destaques em vídeo ---------- */
const videoModal = document.getElementById("videoModal");
const videoPlayer = document.getElementById("videoPlayer");
const videoModalFechar = document.getElementById("videoModalFechar");

function abrirVideo(src) {
  videoPlayer.src = src;
  videoModal.hidden = false;
  videoPlayer.play();
}

function fecharVideo() {
  videoPlayer.pause();
  videoPlayer.removeAttribute("src");
  videoPlayer.load();
  videoModal.hidden = true;
}

document.querySelectorAll(".destaque-video").forEach((botao) => {
  botao.addEventListener("click", () => abrirVideo(botao.dataset.video));
});

videoModalFechar.addEventListener("click", fecharVideo);
videoModal.addEventListener("click", (e) => { if (e.target === videoModal) fecharVideo(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !videoModal.hidden) fecharVideo(); });

/* ---------- Seções que animam ao entrar na tela ---------- */
function animarAoEntrar(id) {
  const secao = document.getElementById(id);
  if (!secao) return;

  const semMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (semMovimento) {
    secao.classList.add("is-visible");
    return;
  }

  const observer = new IntersectionObserver((entradas, obs) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        secao.classList.add("is-visible");
        obs.unobserve(secao);
      }
    });
  }, { threshold: 0, rootMargin: "0px 0px -15% 0px" });

  observer.observe(secao);
}

animarAoEntrar("sobre");
animarAoEntrar("galeria");
animarAoEntrar("espaco");