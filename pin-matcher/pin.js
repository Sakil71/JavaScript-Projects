const generateRandomPin = () => {
    const ranomPin = Math.round(Math.random() * 10000) + '';
    if (ranomPin.length === 4) {
        return ranomPin;
    }
    else {
        return generateRandomPin();
    }
}

document.getElementById('generate-pin').addEventListener('click', () => {
    const random = generateRandomPin();
    document.getElementById('display-pin').value = random;
})

document.querySelectorAll('.number').forEach(element => {
    element.addEventListener('click', () => {
        const displayNumber = document.getElementById('display-number');
        const displayNumberValue = displayNumber.value;
        const newDisplayNumber = displayNumberValue + element.innerText;

        if (isNaN(element.innerText)) {
            if (element.innerText === 'C') {
                displayNumber.value = '';
            }
            else if (element.innerText === '<') {
                const digits = displayNumberValue.split('');
                digits.pop();
                const remainingNumber = digits.join('');
                displayNumber.value = remainingNumber;
            }
        }
        else {
            displayNumber.value = newDisplayNumber;
        }
    })
})


document.getElementById('submit-button').addEventListener('click', () => {
    const generateaPin = document.getElementById('display-pin');
    const generateaPinValue = generateaPin.value;

    const inputPin = document.getElementById('display-number');
    const inputPinValue = inputPin.value;

    if(generateaPinValue === '' || inputPinValue === ''){
        alert('Generate Pin or Input Pin Number')
    }

    else if (generateaPinValue === inputPinValue) {
        const isPinMatched = document.getElementById('isPinMatched');
        isPinMatched.innerHTML = `
        <div>
            <h1 class="text-5xl text-green-500">${inputPinValue} Matched </h1>
        </div>
        `
    }
    else {
        document.getElementById('wrong-pin').removeAttribute('hidden');
        generateaPin.value = '';
        inputPin.value = '';
    }
})