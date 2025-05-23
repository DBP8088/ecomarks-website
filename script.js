// Pop-up Modal Logic
function showPopup() {
  document.getElementById("popup").style.display = "flex";
}
function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// Smooth Scroll Effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
  });
});
