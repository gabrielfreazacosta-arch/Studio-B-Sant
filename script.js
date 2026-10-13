"use strict";

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

/* ---------- Galeria: lightbox (ampliar foto) ---------- */
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
  }, { threshold: 0.2 });

  observer.observe(secao);
}

animarAoEntrar("sobre");
animarAoEntrar("galeria");
animarAoEntrar("espaco");