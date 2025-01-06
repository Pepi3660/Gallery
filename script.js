const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");
const modalDescription = document.getElementById("modal-description");

const showModal = (thumbnail) => {
  modal.style.display = "block";
  modalContent.src = thumbnail.src;
  modalDescription.textContent = thumbnail.getAttribute("data-description");
};

const hideModal = () => {
  modal.style.display = "none";
};

document.getElementById("modal-close-button").addEventListener("click", hideModal);
