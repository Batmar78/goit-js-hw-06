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

        const mail = event.currentTarget.elements.email.value;
        const password = event.currentTarget.elements.password.value;
        const formData = {
            mail,
            password,
        };
        
        console.log(formData);
        
        event.currentTarget.reset();   
    }    
};