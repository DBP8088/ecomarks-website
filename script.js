// Wait until the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Navigation pop-up
  const menuIcon = document.getElementById('menuIcon');
  const popupNav = document.getElementById('popupNav');
  const closeBtn = document.getElementById('closeBtn');

  menuIcon.addEventListener('click', function() {
    popupNav.style.display = 'flex';
  });

  closeBtn.addEventListener('click', function() {
    popupNav.style.display = 'none';
  });

  // Modal for product details
  const productModal = document.getElementById('productModal');
  const closeModalBtn = document.getElementById('closeModal');

  closeModalBtn.addEventListener('click', function() {
    productModal.style.display = 'none';
  });

  // Also allow closing the modal by clicking outside the content
  window.addEventListener('click', function(e) {
    if (e.target === productModal) {
      productModal.style.display = 'none';
    }
  });
});

// Function to display a popup modal with product information
function popupProduct(title, description) {
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const productModal = document.getElementById('productModal');

  modalTitle.textContent = title;
  modalDesc.textContent = description;
  productModal.style.display = 'flex';
}
