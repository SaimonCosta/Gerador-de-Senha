document.getElementById('length-range').addEventListener('input', function() {
    document.getElementById('length-value').textContent = this.value;
});

document.getElementById('generate-button').addEventListener('click', function() {
    const length = document.getElementById('length-range').value;
    const useUppercase = document.getElementById('uppercase').checked;
    const useLowercase = document.getElementById('lowercase').checked;
    const useNumbers = document.getElementById('numbers').checked;
    const useSymbols = document.getElementById('symbols').checked;

    const password = generatePassword(length, useUppercase, useLowercase, useNumbers, useSymbols);
    document.getElementById('password-output').textContent = password;
});

function generatePassword(length, useUppercase, useLowercase, useNumbers, useSymbols) {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    let allChars = '';
    if (useUppercase) allChars += uppercaseChars;
    if (useLowercase) allChars += lowercaseChars;
    if (useNumbers) allChars += numberChars;
    if (useSymbols) allChars += symbolChars;

    if (!allChars) {
        alert('Ao menos um tipo de caractere deve ser selecionado');
        return '';
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }

    return password;
}
