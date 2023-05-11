const refs = {
  input: document.querySelector('input'),
  buttonCreate: document.querySelector('button[data-create]'),
  buttonDestroy: document.querySelector('button[data-destroy]'),
  div: document.querySelector('#boxes'),
}


refs.buttonCreate.addEventListener('click', onButtonCreate)
refs.buttonDestroy.addEventListener('click', onButtonDestroy)
refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  return Number(event.currentTarget.value);
};

function onButtonCreate() {
  createBoxes(Number(refs.input.value));
}


function createBoxes(amount) {
    
  const arr = [];
  let sizeWidth = 30;
  let sizeHeight = 30;
  const change = 10;
  const div = document.createElement('div');
  div.classList.add('boxes-item')
  

  div.style.width = sizeWidth + "px";
  div.style.height = sizeHeight + "px"; 
  div.style.backgroundColor = getRandomHexColor();

  arr.push(div);

  for (let i = 0; i < amount-1; i += 1) {
    const div = document.createElement('div');
    div.classList.add('boxes-item')
    sizeWidth += change;
    sizeHeight += change;
    div.style.width  = sizeWidth + "px";
    div.style.height = sizeHeight + "px";
    div.style.backgroundColor = getRandomHexColor();
     
    arr.push(div);
  }
 refs.div.append(...arr);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onButtonDestroy() {
  destroyBoxes(); 
  
}

function destroyBoxes() {
  let divRef = document.querySelectorAll('.boxes-item');
  for (const div of divRef) {
    div.remove();
  }
}


