document.getElementById("generate-btn").addEventListener("click", function() {
    const length = parseInt(document.getElementById("password-length").value);
    const useUppercase = document.getElementById("include-uppercase").checked;
    const useNumbers = document.getElementById("include-numbers").checked;
    const useSymbols = document.getElementById("include-symbols").checked;

    const password = generatePassword(length, useUppercase, useNumbers, useSymbols);
    document.getElementById("generated-password").value = password;
});

function generatePassword(length, useUppercase, useNumbers, useSymbols) {
    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()-_=+[]{}|;:,.<>?/";

    let characters = lowerCaseLetters;

    if (useUppercase) characters += upperCaseLetters;
    if (useNumbers) characters += numbers;
    if (useSymbols) characters += symbols;

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    return password;
}
