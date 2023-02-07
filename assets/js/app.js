const inputmouse = document.querySelector('input#input-password');
const iconmouse = document.querySelector('div#icon-password');

inputmouse.addEventListener('click', function() {
    inputmouse.style.backgroundColor = '#FFFFFF';
    inputmouse.style.color = '#000000';
});

iconmouse.addEventListener('click', function() {
    if (inputmouse.type === 'password') {
        inputmouse.type = 'text';
        iconmouse.classList.add('hide');
    } else {
        inputmouse.type = 'password';
        iconmouse.classList.remove('hide');
    }
});
