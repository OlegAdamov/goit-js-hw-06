const onInputId = document.querySelector('#font-size-control');
const onSpanId = document.querySelector('#text');

onInputId.addEventListener('input', spanIdText);

function spanIdText(event) {
    onSpanId.style.fontSize = `${event.currentTarget.value}px`;
}
