// Создай переменную counterValue в которой будет храниться текущее значение счетчика 
//   и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай 
//   значение счетчика.
// Обновляй интерфейс новым значением переменной counterValue.



const decrementBtn = document.querySelector('#counter button[data-action="decrement"]');
const valueSpan = document.querySelector('#value');
const incrementBtn = document.querySelector('#counter button[data-action="increment"]');


console.log(decrementBtn)
console.log(valueSpan)
console.log(incrementBtn)

const counterValue = 0;


decrementBtn.addEventListener('click', onBtnClickMinus) 

function onBtnClickMinus() {
    console.log('-1')
}


incrementBtn.addEventListener('click', onBtnClickPlus);

function onBtnClickPlus() {
    console.log('+1')


}






