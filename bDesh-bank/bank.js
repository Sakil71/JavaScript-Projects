document.getElementById('signin-button').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const loginSection = document.getElementById('login-section');
    const loginDiv = document.getElementById('login-div');
    
    if(email === 'sakil@gmail.com' && password === 'secret007'){
        loginDiv.style.display = 'none';
        const span = document.createElement('span');
        span.innerText = 'Successfully loged in';
        //set style
        span.style.color = 'green';
        span.style.fontSize = '30px';

        loginSection.appendChild(span); 
        
        window.location.href = "bankInside.html";       
    }
    else{
        alert('Wrong Email or Password');
    }
})