const input = document.querySelector('#validation-input');
const textNumberLimit = document.querySelector('[data-length="6"]');

input.addEventListener('focus', onInputFocus);
input.addEventListener('blur', onInputBlur);

function onInputFocus() {
    console.log('Инпут получил фокус');
}

function onInputBlur() {
    if (textNumberLimit.textContent === Number(textNumberLimit.textContent)) {
        return true;
    };

};
