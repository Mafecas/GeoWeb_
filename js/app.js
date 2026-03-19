// Modal "Acerca de"
const aboutBtn = document.getElementById("about-btn");
const aboutModal = document.getElementById("about-modal");
const closeModal = document.getElementById("close-modal");

if (aboutBtn) {
  aboutBtn.addEventListener("click", () => {
    aboutModal.style.display = "flex";
  });
}

if (closeModal) {
  closeModal.addEventListener("click", () => {
    aboutModal.style.display = "none";
  });
}

window.addEventListener("click", (e) => {
  if (e.target === aboutModal) {
    aboutModal.style.display = "none";
  }
});

// Abrir módulo (por ahora solo alerta)
function abrirModulo(modulo) {
  alert("Abriste el módulo de " + modulo);
}

// Inicializar Vanta.js solo si estoy en index.html
document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("geometrica")) {
    VANTA.NET({
      el: "#geometrica",
      mouseControls: true,
      touchControls: true,
      minHeight: 600.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0xffffff,
      backgroundColor: 0x0,
      points: 10.0,
      maxDistance: 20.0,
      spacing: 15.0
    });
  }

  if (document.getElementById("fisica")) {
    VANTA.GLOBE({
      el: "#fisica",
      mouseControls: true,
      touchControls: true,
      minHeight: 600.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x00ffcc,
      backgroundColor: 0x000000,
      size: 1.2
    });
  }
});

// Tema claro/oscuro
const themeToggle = document.getElementById("theme-toggle");
if (themeToggle) {
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
    themeToggle.textContent = "☀️";
  }

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
    if (document.body.classList.contains("light")) {
      themeToggle.textContent = "☀️";
      localStorage.setItem("theme", "light");
    } else {
      themeToggle.textContent = "🌙";
      localStorage.setItem("theme", "dark");
    }
  });
}
