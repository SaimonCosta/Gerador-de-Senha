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

document.getElementById('copy-button').addEventListener('click', function() {
    CopyPassword('password-output');
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

function CopyPassword(id) {
    let r = document.createRange();
    r.selectNode(document.getElementById(id));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    try {
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        showAlert();
    } catch (err) {
        console.log('Não foi possível copiar');
    }
}

function showAlert() {
    const alertPopup = document.getElementById('alert-popup');
    alertPopup.classList.add('show');
    setTimeout(() => {
        alertPopup.classList.remove('show');
    }, 3000); // O pop-up será exibido por 3 segundos
}
