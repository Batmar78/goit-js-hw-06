const refs = {
    input: document.querySelector('input'),
    span: document.querySelector('span'),

}

refs.input.addEventListener('input', onSearch)


function onSearch(event) {
refs.span.style.fontSize = `${event.currentTarget.value}px`
    
}