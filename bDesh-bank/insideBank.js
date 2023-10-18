document.getElementById('deposit-button').addEventListener('click', () => {
    const beforeDisplay = document.getElementById('before-display');
    beforeDisplay.style.display = 'none';

    const afterDisplay = document.getElementById('after-display');
    afterDisplay.removeAttribute('hidden', true);

    // back button
    const backButton = document.getElementById('back-button');
    backButton.removeAttribute('hidden', true)
    backButton.addEventListener('click', ()=>{
        window.location.href = 'bankInside.html';
    });


    document.getElementById('deposit-now-button').addEventListener('click', () => {
        const depositField = document.getElementById('deposit-field');
        const depositFieldValue = depositField.value;
        const depositValue = parseFloat(depositFieldValue);

        if (depositValue === 0 || isNaN(depositValue)) {
            alert('Enter Deposit Amount');
            return 0;
        };

        const totalBalance = document.getElementById('total-balance');
        const totalBalanceNumber = parseFloat(totalBalance.innerText);

        const afterTotalBalance = depositValue + totalBalanceNumber;

        totalBalance.innerText = afterTotalBalance;

        depositField.value = '';

        // deposit-history
        const depositHistory = document.getElementById('deposit-history');

        //When deposite history 00
        const defaultHistory = document.getElementById('default-history');
        if(depositValue > 0){
            defaultHistory.style.display = 'none';
        }

        // When deposite history access
        const p = document.createElement('p');
        p.innerHTML = `        
        <p class="text-3xl my-3">
        <i class="fa-solid fa-circle-check text-green-900"></i> 
        You have successfully deposited <span class="font-bold">${depositValue}</span> taka.
        </p>

        `
        depositHistory.appendChild(p);
    })
})