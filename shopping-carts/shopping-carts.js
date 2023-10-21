//Phone Button
document.getElementById('phone-plus-button').addEventListener('click', ()=>{
    const updateValue = getInputValueAndUpdateById('phone-input-value', true);
    setInputElementById('phone-input-value', updateValue); 
    setPrice('phone-price', updateValue, 1200);
    calculateTotal(0.1);
})

document.getElementById('phone-minus-button').addEventListener('click', ()=>{
    const updateValue = getInputValueAndUpdateById('phone-input-value', false);
    setInputElementById('phone-input-value', updateValue);
    setPrice('phone-price', updateValue, 1200);
    calculateTotal(0.1);
})


// Case Button 
document.getElementById('case-plus-button').addEventListener('click', ()=>{
    const updateValue = getInputValueAndUpdateById('case-input-value', true);
    setInputElementById('case-input-value', updateValue);
    setPrice('case-price', updateValue, 50);
    calculateTotal(0.1);
})
document.getElementById('case-minus-button').addEventListener('click', ()=>{
    const updateValue = getInputValueAndUpdateById('case-input-value', false);
    setInputElementById('case-input-value', updateValue);
    setPrice('case-price', updateValue, 50);
    calculateTotal(0.1);
})


// remove  Item
removeItem('remove-item-1');
removeItem('remove-item-2');