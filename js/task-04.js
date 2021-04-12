// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать
// значение счетчика на `1`.

// - Создай переменную `counterValue` в которой будет хранится текущее значение
//   счетчика.
// - Создай функции `increment` и `decrement` для увеличения и уменьшения значения
//   счетчика
// - Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

let counterValue = document.querySelector('#value');
const addNumberBtn = document.querySelector('[data-action="increment"]');
const removeNumberBtn = document.querySelector('[data-action="decrement"]');
let j = 0;

addNumberBtn.addEventListener('click', increment);
removeNumberBtn.addEventListener('click', decrement);

function increment() {
    counterValue.textContent = j += 1; 
};
    
function decrement() {
   counterValue.textContent = j -= 1;
};
console.log(counterValue);

