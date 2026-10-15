// Os destinos dos botões ficam no index.html.
// Este script acrescenta um pequeno feedback visual ao clicar.
document.querySelectorAll(".link-item").forEach((link) => {
  link.addEventListener("click", () => {
    link.classList.add("is-active");
    window.setTimeout(() => link.classList.remove("is-active"), 220);
  });
});
