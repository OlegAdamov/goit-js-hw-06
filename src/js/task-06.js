
// Напиши скрипт, который при потере фокуса на инпуте (событие blur),
//      проверяет его содержимое на правильное количество введённых символов.


// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным,
//      если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid,
//      которые мы уже добавили в исходные файлы задания.


const onStyleInput = document.querySelector('#validation-input')
console.log('onStyleInput', onStyleInput)
// const onStyleInputValid = document.querySelector('#validation-input.valid')
// console.log('onStyleInputValid', onStyleInputValid)
// const onStyleInputInvalid = document.querySelector('#validation-input.invalid')
// console.log('onStyleInputInvalid', onStyleInputInvalid)

// const onPlaceholderInput = document.querySelector('input[data-length="6"]');
// console.log('onPlaceholderInput', onPlaceholderInput)

onStyleInput.addEventListener('blur', onInputBlur);

function onInputBlur() {
    // onStyleInput.classList.add(invalid)
    if (+onStyleInput.value.length === +onStyleInput.dataset.length) {
        onStyleInput.classList.remove('invalid')
        onStyleInput.classList.add('valid')
    } else {
        onStyleInput.classList.remove('valid')
        onStyleInput.classList.add('invalid')
    };
};




