const inputRef = document.querySelector('input');

inputRef.addEventListener('blur', onInputBlur);
inputRef.addEventListener('input', onInputChange);


function onInputBlur(Event) {
    if (inputRef.value.length !== Number(inputRef.dataset.length)) {
        // inputRef.id = '';
        inputRef.classList.add('invalid');
        inputRef.classList.remove('valid');
        
    } else {
        // inputRef.id = '';
        inputRef.classList.remove('invalid');
        inputRef.classList.add('valid');
        
    }
}

function onInputChange(Event) {
    return inputRef.value
    
}

