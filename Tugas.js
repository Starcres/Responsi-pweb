const links = document.querySelectorAll("nav a");
links.forEach((link) => {
  link.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});
