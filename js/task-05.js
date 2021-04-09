// Напиши скрипт который, при наборе текста в инпуте `input#name-input` (событие
// input), подставляет его текущее значение в `span#name-output`. Если инпут
// пустой, в спане должна отображаться строка `'незнакомец'`.

const input = document.querySelector('#name-input');
const nameLabel = document.querySelector('#name-output');

input.addEventListener('input', onInputChange);

function onInputChange(event) {
    if (event.currentTarget.value === '') {
        nameLabel.textContent = 'незнакомец';
    } else {
        nameLabel.textContent = event.currentTarget.value;
    }
};
