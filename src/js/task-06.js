// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое
// на правильное количество символов.
// - Сколько символов должно быть в инпуте, указывается в его атрибуте
//   `data-length`.
// - Если введено подходящее количество, то `border` инпута становится зеленым,
//   если неправильное - красным.

// Для добавления стилей, используй CSS-классы `valid` и `invalid`.

const inputForm = document.querySelector('#validation-input');
const lengthNumberForm = document.querySelector('[data-length="6"]');

inputForm.addEventListener('blur', () => {
    if (+lengthNumberForm.dataset.length === lengthNumberForm.value.length) {
        inputForm.classList.add('valid');
        inputForm.classList.remove('invalid');
    } else {
        inputForm.classList.remove('valid');
        inputForm.classList.add('invalid');
    };
});









