const form = document.querySelector('.form-container');
const email = document.querySelector('input[type=email]');
const submitBtn = document.querySelector('#submit-btn');

const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

const validateForm = (e) => {
    e.preventDefault();
    
    if (!emailRegex.test(email.value)) {
        form.classList.add('invalid')
        email.classList.add('invalid');
    } else {
        email.value = '';
        form.classList.remove('invalid')
        email.classList.remove('invalid');
        form.parentElement.submit();
    }
}

submitBtn.addEventListener('click', validateForm);