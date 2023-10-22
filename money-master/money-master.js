const inputFieldValue = id =>{
    const stringValue = document.getElementById(id);
    const value = parseFloat(stringValue.value);
    return value;
}

const textValue = id =>{
    const stringValue = document.getElementById(id);
    const value = parseFloat(stringValue.innerText);
    return value;
}

document.getElementById('calculate-expenses').addEventListener('click', ()=>{
    const foodValue = inputFieldValue('food-expenses');
    const rentValue = inputFieldValue('rent-expenses');
    const clothesValue = inputFieldValue('clothes-expenses');
    const income = inputFieldValue('income');
    if(isNaN(income) || isNaN(foodValue) || isNaN(rentValue) || isNaN(clothesValue)){
        alert('Please Input A Number');
        return;
    }

    const totalExpenses = document.getElementById('total-expenses');
    const expenses = foodValue + rentValue + clothesValue;
    if(expenses > income){
        alert('Your Income Is So Poor Than Your Expense!');
        return;
    }
    totalExpenses.innerText = expenses;

    const prevBalance = document.getElementById('balance');
    const balance = income - expenses;
    prevBalance.innerText = balance;
})

document.getElementById('save-button').addEventListener('click', ()=>{
    const income = inputFieldValue('income');
    const percentage = inputFieldValue('percentage') / 100;
    const incomePercentage = income * percentage;
    if(isNaN(incomePercentage)){
        alert('Please Enter A Number');
        return;
    }
    document.getElementById('saving-ammount').innerText = incomePercentage;

    const prevBalance = textValue('balance');
    const remainingBalance = prevBalance - incomePercentage;
    if(remainingBalance <= 0){
        alert('Please Input Your Cost Ammount');
        return;
    }
    document.getElementById('remaining-balance').innerText = remainingBalance;
})