// Deposit Button
document.getElementById('deposit-button').addEventListener('click', () => {
    //Before display
    const beforeDisplay = document.getElementById('before-display');
    beforeDisplay.style.display = 'none';

    //After display
    const afterDisplay = document.getElementById('after-deposit-display');
    afterDisplay.removeAttribute('hidden', true);

    // back button
    const backButton = document.getElementById('back-button');
    backButton.removeAttribute('hidden', true)
    backButton.addEventListener('click', () => {
        window.location.href = 'insideBank.html';
    });

    //Deposit now button
    document.getElementById('deposit-now-button').addEventListener('click', () => {
        // Deposit field value
        const depositField = document.getElementById('deposit-field');
        const depositFieldValue = depositField.value;
        const depositValue = parseFloat(depositFieldValue);
        setHistoryLocalStorage(depositValue); //Set LocalStorage

        if (depositValue === 0 || isNaN(depositValue)) {
            alert('Enter Deposit Amount');
            return 0;
        };

        //Total Balance
        const totalBalance = document.getElementById('total-balance');
        const totalBalanceNumber = parseFloat(totalBalance.innerText);

        const afterTotalBalance = depositValue + totalBalanceNumber;
        //Set balance in local storage
        setBalanceInLs(afterTotalBalance);

        const lsBalance = getHistoryLocalStorage('balance');
        totalBalance.innerText = lsBalance;

        depositField.value = '';


        // deposit-history
        getHistoryValueFromLocalStorage();
        location.reload();
    })
})


// Withdraw-button
document.getElementById('Withdraw-button').addEventListener('click', () => {
    //Before display
    const beforeDisplay = document.getElementById('before-display');
    beforeDisplay.style.display = 'none';

    //After display
    const afterWithdrawDisplay = document.getElementById('after-withdraw-display');
    afterWithdrawDisplay.removeAttribute('hidden');

    // back button
    const backButton = document.getElementById('back-button');
    backButton.removeAttribute('hidden', true)
    backButton.addEventListener('click', () => {
        window.location.href = 'insideBank.html';
    });

    document.getElementById('withdraw-now-button').addEventListener('click', () => {
        //withdraw field value
        const withdrawField = document.getElementById('withdraw-field');
        const withdrawFieldValue = withdrawField.value;
        const withdrawValue = parseFloat(withdrawFieldValue);

        //Empty or 0 balance check
        if (withdrawValue === 0 || isNaN(withdrawValue)) {
            alert('Enter Withdraw Amount');
            return 0;
        };

        //Total balance
        const totalBalance = document.getElementById('total-balance');
        const totalBalanceNumber = parseFloat(totalBalance.innerText);

        //Insufficient Balance check
        if (totalBalanceNumber < withdrawValue) {
            alert('Insufficient Balance');
            withdrawField.value = '';
            return 0;
        }

        const afterTotalBalance = totalBalanceNumber - withdrawValue;

        totalBalance.innerText = afterTotalBalance;

        withdrawField.value = '';


        // withdraw-history
        const withdrawHistory = document.getElementById('withdraw-history');

        //When withdraw history 00
        const defaultHistory = document.getElementById('default-withdraw-history');
        if (withdrawValue > 0) {
            defaultHistory.style.display = 'none';
        }

        // When withdraw history access
        const p = document.createElement('p');
        p.innerHTML = `        
        <p class="text-xs md:text-2xl lg:text-2xl my-3">
        <i class="fa-solid fa-circle-minus text-red-900"></i> 
        You have successfully withdraw <span class="font-bold">${withdrawValue}</span> taka.
        </p>

        `
        withdrawHistory.appendChild(p);

    })
})


//Total Balance Toggle Button With Star:

let showStar = false;
const balance = document.getElementById('total-balance').innerText;

document.getElementById('total-balance').addEventListener('click', (event) => {
    if (showStar) {
        //show balance
        event.target.innerHTML = balance;
    }
    else {
        //Show the star icon
        const starIcon = document.createElement('span');
        starIcon.innerHTML = '&#8902;&#8902;&#8902;&#8902;';

        event.target.innerText = '';
        event.target.appendChild(starIcon);
    }
    //update show star
    showStar = !showStar;
})
