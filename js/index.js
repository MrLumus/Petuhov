const timeList = document.querySelector(".invite-form__time-wrapper");
const timeListInput = document.querySelector(".invite-form__time-text");
const timeListItem = document.querySelectorAll(".invite-form__time-item");
const timeListBtn = document.querySelector("invite-form__time-btn");

const burger = document.querySelector(".nav__burger");
const menu = document.querySelector(".menu");

timeList.addEventListener("click", () => {
  timeList.classList.toggle("open");
});

timeListItem.forEach((item) => {
  item.addEventListener("click", () => {
    timeListInput.innerHTML = item.innerHTML;
  });
});

burger.addEventListener("click", () => {
  menu.classList.toggle("open");
});

// Modal Windows

const callbackCloseBtn = document.querySelector(".modal-callback__close");
const callbackModal = document.querySelector(".modal-callback-wrapper");
const navCallbackBtn = document.querySelector(".nav__callback");

callbackCloseBtn.addEventListener("click", () => {
  callbackModal.classList.toggle("openModal");
});
navCallbackBtn.addEventListener("click", () => {
  callbackModal.classList.toggle("openModal");
  console.log("opened");
});
