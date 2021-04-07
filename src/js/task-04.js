let counterValue = document.querySelector('#value');
const addNumberBtn = document.querySelector('[data-action="increment"]');
const removeNumberBtn = document.querySelector('[data-action="decrement"]');


addNumberBtn.addEventListener('click', increment);
removeNumberBtn.addEventListener('click', decrement);

function increment() {
    counterValue.textContent = Number(counterValue.textContent) + 1; 
};
    
function decrement() {
    counterValue.textContent = Number(counterValue.textContent) - 1;
};





