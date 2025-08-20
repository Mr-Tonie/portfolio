  // Preloader
window.addEventListener("load", () => {
  document.getElementById("preloader").style.display = "none";
});

// Dark/Light Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  themeToggle.textContent = document.body.classList.contains("dark-theme") ? "☀️" : "🌙";
});

// Mobile Menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Typed Text Effect
const typedText = document.getElementById("typed-text");
const words = [" a Tech Enthusiast", " a Software Engineer", "a Problem Solver"];
let wordIndex = 0;
let charIndex = 0;
let typing = true;

function typeEffect() {
  if (typing) {
    if (charIndex < words[wordIndex].length) {
      typedText.textContent += words[wordIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeEffect, 100);
    } else {
      typing = false;
      setTimeout(typeEffect, 2000);
    }
  } else {
    if (charIndex > 0) {
      typedText.textContent = words[wordIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(typeEffect, 50);
    } else {
      typing = true;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(typeEffect, 500);
    }
  }
}
typeEffect();
