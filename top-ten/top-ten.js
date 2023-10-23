document.querySelectorAll('.select-button').forEach(button => {
    button.addEventListener('click', (event) => {
        const actorsName = event.target.parentNode.querySelector('.actors-name').innerText;

        const actorsList = document.getElementById('actors-list');
        if (actorsList.children.length >= 10) {
            alert("Already added ten actors/ actress");
            return;
        }

        if (actorsList.children.length >= 0) {
            document.getElementById('default-text').style.display = 'none';
        }

        const li = document.createElement('li');

        if (actorsList.innerText.includes(li.innerText)) {
            button.disabled = true;
            button.style.backgroundColor = 'gray';
        }
        li.innerText = actorsName;
        actorsList.appendChild(li);

        //Remove Actors/Actress
        actorsList.addEventListener('click', (event) => {
            if(actorsList.children.length === 0){
                document.getElementById('default-text').style.display = 'block';
            }
            if(!actorsList.innerText.includes(li.innerText)){
                button.disabled = false;
                button.style.backgroundColor = 'rgb(23 37 84)';
            }          
            event.target.remove(event.target);  
        })
    })
})


const getInputValue = (id) =>{    
    return value = parseInt(document.getElementById(id).value);
}

document.getElementById('calcaulate').addEventListener('click', ()=>{
    const actorsList = document.getElementById('actors-list').children.length;
    const perActorExpenses = getInputValue('per-actor-expenses');

    document.getElementById('expenses').innerText = actorsList * perActorExpenses;
})

document.getElementById('calcaulate-total').addEventListener('click', ()=>{
    document.getElementById('total-expenses').innerText = parseInt(document.getElementById('expenses').innerText) + getInputValue('director-expenses') + getInputValue('producer-expenses');    
})
