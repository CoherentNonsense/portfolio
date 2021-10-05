const hamburgerMenu = document.getElementById("hamburger-menu");
hamburgerMenu.addEventListener("click", () => hamburgerMenu.classList.toggle("open"));

const header = document.getElementsByTagName("header")[0];
window.onscroll = (e) => {
  if (document.documentElement.scrollTop > 15) { header.classList.add("shadow") }
  else { header.classList.remove("shadow") }
};
