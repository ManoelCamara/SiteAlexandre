
  const slides = document.querySelectorAll(".slide");
  let indice = 0;

  function mostrarSlide(n) {
    slides.forEach(slide => slide.classList.remove("ativo"));
    slides[n].classList.add("ativo");
  }

  document.querySelector(".anterior").addEventListener("click", () => {
    indice = (indice - 1 + slides.length) % slides.length;
    mostrarSlide(indice);
  });

  document.querySelector(".proximo").addEventListener("click", () => {
    indice = (indice + 1) % slides.length;
    mostrarSlide(indice);
  });

  // (Opcional) Auto-carrossel:
  setInterval(() => {
    indice = (indice + 1) % slides.length;
    mostrarSlide(indice);
  }, 5000); // troca a cada 5 segundos

