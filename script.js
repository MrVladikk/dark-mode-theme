document.addEventListener("DOMContentLoaded", () => {
  let toggleButton = document.getElementById("theme-toggle");
  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
      toggleButton.textContent = "Switch to Light Mode";
    } else {
      toggleButton.textContent = "Switch to Dark Mode";
    }
  });
});
