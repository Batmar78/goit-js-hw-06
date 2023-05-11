const refs = {
    form: document.querySelector('.login-form'),

}

refs.form.addEventListener('submit', onSearch);


function onSearch(event) {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;
    if (!email.value.length || !password.value.length) {
        alert(`Всі поля повинні бути заповнені`);
    } else {
        const formData = new FormData(event.currentTarget);
        formData.forEach((value, name) => {
            console.log(name, value);
        })
        event.currentTarget.reset();   
    }    
};