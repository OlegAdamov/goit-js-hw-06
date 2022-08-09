
const onStyleInput = document.querySelector('#validation-input')

onStyleInput.addEventListener('blur', onInputBlur);

function onInputBlur() {
    onStyleInput.classList.add('invalid')
    if (Number(onStyleInput.value.length) === Number(onStyleInput.dataset.length)) {
        onStyleInput.classList.toggle('invalid')
        onStyleInput.classList.toggle('valid')
    };
};





