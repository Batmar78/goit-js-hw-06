const refs = {
    btnDecrement: document.querySelector('button[data-action="decrement"]'),
    btnIncrement: document.querySelector('button[data-action="increment"]'),
    counterValue: document.querySelector('#value'),
}

let counterValue = 0;

refs.btnDecrement.addEventListener('click', () => {
    refs.counterValue.textContent = counterValue -= 1;
});
refs.btnIncrement.addEventListener('click', () => {
    refs.counterValue.textContent = counterValue += 1;
});