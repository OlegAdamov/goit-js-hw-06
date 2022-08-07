
const decrementBtn = document.querySelector('#counter button[data-action="decrement"]');
const valueSpan = document.querySelector('#value');
const incrementBtn = document.querySelector('#counter button[data-action="increment"]');

let counterValue = 0;

decrementBtn.addEventListener('click', onBtnClickMinus) 

function onBtnClickMinus() {
    valueSpan.textContent = counterValue -= 1;
}


incrementBtn.addEventListener('click', () => {
    valueSpan.textContent = counterValue += 1;
});






