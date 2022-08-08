function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const onSpanColor = document.querySelector('.color')
const onButtonChangeColor = document.querySelector('.change-color')
const onBodyPage = document.querySelector('body');

const changeColorPage = (event) => {
  event.preventDefault();

  const onNewColor = `${getRandomHexColor()}`

  onBodyPage.style.backgroundColor = onNewColor;
  onSpanColor.innerHTML = onNewColor;
  console.log('onSpanColor', onSpanColor)
}

onButtonChangeColor.addEventListener('click', changeColorPage);