
const onStyleInput = document.querySelector('#validation-input')

onStyleInput.addEventListener('blur', onInputBlur);

function onInputBlur() {
    onStyleInput.classList.add('invalid')
    if (+onStyleInput.value.length === +onStyleInput.dataset.length) {
        onStyleInput.classList.toggle('invalid')
        onStyleInput.classList.toggle('valid')
    };
};




