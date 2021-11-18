console.log('loaded')

const closeButton = document.querySelector(".popup__close-button");
const editButton = document.querySelector(".profile__edit-button");
const popup = document.querySelector(".popup");
const formElement = document.querySelector(".popup__content");
let nameImput = formElement.querySelector(".input__name");
let jobImput = formElement.querySelector(".input__workplace");
let profileName = document.querySelector(".profile__name");
let profileWorkplace = document.querySelector(".profile__workplace");



function openPopup() {
  nameImput.value = profileName.textContent;
  jobImput.value = profileWorkplace.textContent;
  popup.classList.add("popup_open")
}

function closePopup() {
  popup.classList.remove("popup_open")
}

function formSubmitHandler() {
  evt.preventDefault();

  profileName.textContent = nameImput.value;
  profileWorkplace.textContent = jobImput.value;
  clousePopup();
}

formElement.addEventListener('submit', formSubmitHandler);
closeButton.addEventListener('click', closePopup);
editButton.addEventListener('click', openPopup);
