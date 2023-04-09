const nameTextElement = document.getElementById('product-name');
const remainingCharsElement = document.getElementById('remaining-chars')

const MaxAllowedChars = nameTextElement.maxLength;

function updateRemainingCharacters() {
const enteredValue = nameTextElement.value;

const remainingCharacters = MaxAllowedChars - enteredValue.length;

remainingCharsElement.textContent = remainingCharacters;

    if (remainingCharacters <= 10) {
        nameTextElement.classList.add('warning')
        remainingCharsElement.classList.add('waring');
    } else {
        nameTextElement.classList.remove('warning')
        remainingCharsElement.classList.remove('warning');
    }
}

nameTextElement.addEventListener('input', updateRemainingCharacters);