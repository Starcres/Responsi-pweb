document.addEventListener("DOMContentLoaded", () => {
  const articles = document.querySelectorAll("article");

  articles.forEach((article) => {
    article.addEventListener("mouseenter", () => {
      article.style.transform = "scale(1.02)";
      article.style.transition = "transform 0.3s ease-in-out";
    });

    article.addEventListener("mouseleave", () => {
      article.style.transform = "scale(1)";
    });
  });

  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = e.target.getAttribute("href");
      window.location.href = target;
    });
  });
});
