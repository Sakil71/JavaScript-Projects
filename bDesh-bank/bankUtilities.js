//Get data in localStorage
const getHistoryLocalStorage = (historyEvent) => {
    const savedValue = localStorage.getItem(historyEvent);
    let history = {};
    if (savedValue) {
        history = JSON.parse(savedValue);
    }
    return history;
}

//Set balance
const setBalanceInLs = (balance) => {
    let existingHistory = getHistoryLocalStorage('balance');
    existingHistory = balance;
    localStorage.setItem('balance', JSON.stringify(existingHistory));
}

document.addEventListener("DOMContentLoaded", getBalanceFromLocalStorage = ()=>{
    const totalBalance = document.getElementById('total-balance');
        const localStorageBalance = getHistoryLocalStorage('balance');
        totalBalance.innerText = localStorageBalance;
})


//set history in localStorage
const setHistoryLocalStorage = (history) => {
    const existingHistory = getHistoryLocalStorage('deposit');
    existingHistory[history] = history;
    localStorage.setItem('deposit', JSON.stringify(existingHistory));
}


//Deposit
document.addEventListener("DOMContentLoaded", getHistoryValueFromLocalStorage = () => {
    const getValueFromLs = getHistoryLocalStorage('deposit');
    console.log(getValueFromLs)

    const defaultHistory = document.getElementById('default-deposit-history');
    const depositHistory = document.getElementById('deposit-history');

    for (const element in getValueFromLs) {
        if (getValueFromLs.hasOwnProperty(element)) {
            defaultHistory.style.display = 'none';

            const p = document.createElement('p');
            p.innerHTML = `        
        <p class="text-xs md:text-2xl lg:text-2xl my-3">
        <i class="fa-solid fa-circle-plus text-green-900"></i> 
        You have successfully deposit <span class="font-bold">${getValueFromLs[element]}</span> taka.
        </p> `
            depositHistory.appendChild(p);
        }

    }

})