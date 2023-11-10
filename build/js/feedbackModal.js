"use strict";

// Открытие модалки
(function () {
  var ESC_BUTTON = 27;
  var closeButtons = document.querySelectorAll(".modal-callback__close");
  var commonModalWrapper = document.querySelector(".modal-overlay");
  var modalCallback = document.querySelector(".modal-callback");
  var modalMessage = document.querySelector(".message");
  // const loader = modalMessage.querySelector(".loader");
  // const messageText = modalMessage.querySelector(".message p");
  var openModalButtons = Array.from(document.querySelectorAll(".modal-btn"));
  var body = document.querySelector("body");
  // const AJAX_ERROR_TEXT =
  //     "Что-то пошло не так, попробуйте еще раз отправить форму";
  // let currentService = "nope";

  function onOverlayClick(evt) {
    if (evt.target.classList.contains("modal-overlay")) {
      closeMenu();
      closeOverlay();
      // closeMessage();
    }
  }

  function onCloseButtonClick(evt) {
    evt.preventDefault();
    closeMenu();
    closeOverlay();
    // closeMessage();
  }

  function onDocumentKeyDown(evt) {
    if (evt.keyCode === ESC_BUTTON && commonModalWrapper.classList.contains("open")) {
      evt.preventDefault();
      closeMenu();
      closeOverlay();
      closeMessage();
    }
  }
  function closeMenu() {
    modalCallback.classList.remove("open");
  }
  function closeMessage() {
    modalMessage.classList.remove("show");
    // loader.classList.remove("hide");
    // messageText.classList.remove("show");
  }

  function showMessage() {
    modalMessage.classList.add("show");
  }
  function showMessageText() {
    // messageText.classList.add("show");
    // loader.classList.add("hide");
  }
  function closeOverlay() {
    commonModalWrapper.classList.remove("open");
    body.classList.remove("no-scroll");
    commonModalWrapper.removeEventListener("click", onOverlayClick);
    closeButtons.forEach(function (btn) {
      btn.removeEventListener("click", onCloseButtonClick);
    });
    window.removeEventListener("keydown", onDocumentKeyDown);
  }
  function onOpenModalButtonClick(evt) {
    evt.preventDefault();
    var service = evt.target.dataset.service;
    // if (service) {
    //     currentService = service;
    // }
    // currentService = "nope";

    commonModalWrapper.classList.add("open");
    modalCallback.classList.add("open");
    body.classList.add("no-scroll");
    commonModalWrapper.addEventListener("click", onOverlayClick);
    Array.from(closeButtons).forEach(function (btn) {
      btn.addEventListener("click", onCloseButtonClick);
    });
    window.addEventListener("keydown", onDocumentKeyDown);
  }
  Array.from(openModalButtons).forEach(function (btn) {
    btn.addEventListener("click", onOpenModalButtonClick);
  });
})();