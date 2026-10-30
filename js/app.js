document.addEventListener("DOMContentLoaded", () => {
const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

if (menuToggle && navigation) {
menuToggle.addEventListener("click", () => {
navigation.classList.toggle("ativo");
});

const links = navigation.querySelectorAll("a");
links.forEach(link => {
link.addEventListener("click", () => {
navigation.classList.remove("ativo");
});
});
}
});
