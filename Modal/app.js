const ModalButton = document.querySelector(".modal-btn");
const Modal = document.querySelector(".modal-overlay");
const closebtn = document.querySelector(".close-btn");

ModalButton.addEventListener("click",function () {
    Modal.classList.add("open-modal");
});

closebtn.addEventListener("click",function () {
    Modal.classList.remove("open-modal");
});