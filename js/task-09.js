const refs = {
  body: document.querySelector('body'),
  bacgroundTitle: document.querySelector('.color'),
  button: document.querySelector('.change-color'),
};

refs.button.addEventListener('click', onChangeBacgroundColor);

function onChangeBacgroundColor(event) {
  const randomColor = getRandomHexColor();
 
  refs.body.style.backgroundColor = randomColor;
  refs.bacgroundTitle.textContent = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
