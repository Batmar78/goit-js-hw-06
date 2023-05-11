const refs = {
    btnDecrement: document.querySelector('button[data-action="decrement"]'),
    btnIncrement: document.querySelector('button[data-action="increment"]'),
    counterValue: document.querySelector('#value'),
}


refs.btnDecrement.addEventListener('click', () => {
    refs.counterValue.textContent = Number(refs.counterValue.textContent) - 1;
});
refs.btnIncrement.addEventListener('click', () => {
    refs.counterValue.textContent = Number(refs.counterValue.textContent) + 1;
});


