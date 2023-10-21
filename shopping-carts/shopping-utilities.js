const getInputValueAndUpdateById = (idName, update) => {
    const inputValue = document.getElementById(idName);
    const previousValue = parseInt(inputValue.value);

    let updatedValue;
    if (update === false) {
        if (previousValue <= 0) {
            return 0;
        }
        updatedValue = previousValue - 1;
    }
    else {
        updatedValue = previousValue + 1;
    }
    return updatedValue;
}

const getTextById = idName => {
    const text = document.getElementById(idName);
    const value = parseFloat(text.innerText);
    return value;
}

const getInputValue = idName => {
    return document.getElementById(idName).value;
}

const setInputElementById = (idName, value) => {
    const getField = document.getElementById(idName);
    getField.value = value;
}

const setPrice = (idNmae, updateValue, price) => {
    const totalPrice = updateValue * price;
    document.getElementById(idNmae).innerText = totalPrice;
}

const calculateTotal = (percentage) => {
    const subTotal = getTextById('phone-price') + getTextById('case-price');
    document.getElementById('sub-total').innerText = subTotal;

    const taxString = (subTotal * percentage).toFixed(2);
    const tax = parseFloat(taxString);
    document.getElementById('tax').innerText = tax;

    document.getElementById('finalTotal').innerText = subTotal + tax;
}

//Remove Item
const removeItem = (buttonId) => {
    document.getElementById(buttonId).addEventListener('click', (event) => {
        const removeElement = event.target.parentNode.parentNode.parentNode;
        removeElement.remove();
    })
}