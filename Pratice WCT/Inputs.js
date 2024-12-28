const inputField = document.getElementById('userInput');
const submitButton = document.getElementById('btnSubmit');
const dipplayText = document.getElementById('displayText');

submitButton.addEventListener('click', () => {
    const inputValue = inputField.value;

    displayText.textContent = 'You entered: ${inputValue}';

    console.log('User Input: ${inputvalue}');
});