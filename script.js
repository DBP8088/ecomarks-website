// Wait for the DOM to load before running the scripts
document.addEventListener("DOMContentLoaded", function() {
  // Side Navigation Logic
  const hamburger = document.getElementById("hamburger");
  const sideNav = document.getElementById("sideNav");
  const closeNav = document.getElementById("closeNav");

  hamburger.addEventListener("click", () => {
    sideNav.style.left = "0";
  });

  closeNav.addEventListener("click", () => {
    sideNav.style.left = "-250px";
  });

  // CTA Button: Smooth scroll to Products section
  document.getElementById("ctaBtn").addEventListener("click", () => {
    document.querySelector(".products").scrollIntoView({ behavior: "smooth" });
  });

  // Modal: Close when clicking on the close button or clicking outside the modal content
  const modal = document.getElementById("modal");
  const closeModal = document.getElementById("closeModal");
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});

// Function to open modal with dynamic product details
function openModal(title, description) {
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalDesc").textContent = description;
  document.getElementById("modal").style.display = "flex";
}
