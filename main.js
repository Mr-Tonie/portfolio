document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("theme-toggle");
  const body = document.body;

  // Check localStorage to keep theme after reload
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-theme");
    toggleButton.textContent = "☀️";
  }

  toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-theme");

    if (body.classList.contains("dark-theme")) {
      toggleButton.textContent = "☀️";
      localStorage.setItem("theme", "dark");
    } else {
      toggleButton.textContent = "🌙";
      localStorage.setItem("theme", "light");
    }
  });
});
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    preloader.style.display = 'none';
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const typedTextSpan = document.getElementById("typed-text");
  const textToType = "Mr Tony";
  const typingDelay = 150;
  let charIndex = 0;

  function type() {
    if (charIndex < textToType.length) {
      typedTextSpan.textContent += textToType.charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    }
  }

  // Clear text and start typing effect after slight delay
  typedTextSpan.textContent = "";
  setTimeout(type, 500);
});
