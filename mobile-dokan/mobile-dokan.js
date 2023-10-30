const loadMobile = async (search) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${search}`);
    const data = await res.json();
    displayMobile(data.data);
}
loadMobile('iPhone');

// Display All Phone
const displayMobile = (mobiles) => {
    mobiles = mobiles.slice(0, 8);
    
    const mobileContainer = document.getElementById('mobile-container');
    mobileContainer.innerText = '';
    mobiles.forEach(mobile => {
        const div = document.createElement('div');
        div.classList.add('shadow-xl', 'p-5', 'rounded-lg', 'mx-auto', 'relative');
        div.innerHTML = `
        <img src="${mobile.image}" alt="...">
        <div class="mt-5">
            <h1 class="text-2xl font-bold text-purple-600">${mobile.brand}</h1>
            <h1 class="text-xl font-bold mb-5">Model: <span class="text-xl font-bold text-purple-600">${mobile.phone_name}</span></h1>
            <button onclick="modalNndDetails('${mobile.slug}')" class="absolute py-1 text-white font-semibold bottom-0 left-0 rounded-b-lg bg-purple-700 hover:bg-purple-800 w-full">Details</button>
        </div>
        `
        mobileContainer.appendChild(div);
    });
    showSpinner(false);
}

// search function 
const searching = () => {
    const searchField = document.getElementById('search-field');
    const category = document.getElementById('category');

    const inputVlaue = searchField.value;
    if (inputVlaue === '') {
        loadMobile('iphone');
        category.innerText = 'Apple';
    }
    else {
        category.innerText = inputVlaue;
        searchField.value = '';
        loadMobile(inputVlaue);
    }
}

// Search phone by button
document.getElementById('search-button').addEventListener('click', () => {
    searching();
    showSpinner(true);
    hideModal();
})

//Search phonr by enter key
document.getElementById('search-field').addEventListener('keypress', (event) => {
    if (event.key === "Enter") {
        searching();
        showSpinner(true);
    }
})

// spinner 
const showSpinner = (isLoading) => {
    const spinner = document.getElementById('spinner');
    if (isLoading) {
        spinner.classList.remove('hidden');
    }
    else {
        spinner.classList.add('hidden');
    }
}

//Modal
const modalNndDetails = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    const data = await res.json();
    console.log(data.data)

    const modal = document.getElementById('modal');
    modal.classList.remove('hidden');
    modal.innerHTML = `
        <div class="text-red-300 font-bold text-right">
            <button onclick="hideModal()" class="bg-red-700 px-3 rounded">X</button>
        </div>
        <div class="flex gap-4">
            <img class=" rounded-2xl" src="${data.data.image}">
            <div>
                <h1 class="text-2xl font-bold text-purple-600">${data.data.brand}</h1>
                <h1 class="text-xl font-bold">Model: <span class="text-xl font-bold text-purple-600">${data.data.name}</span></h1>
                <h1 class="text-xl font-bold"><span class="text-xl font-bold text-purple-600">${data.data.releaseDate ? data.data.releaseDate : "Release Date: Not available"}</span></h1>
                <h1 class="text-xl font-bold">ROM/RAM: <span class="text-xl font-bold text-purple-600">${data.data.mainFeatures.memory ? data.data.mainFeatures.memory.slice(0, 10) : " Not available"}</span></h1>
            </div>
        </div>
    `
}

//hideModal
const hideModal = () => {
    const modal = document.getElementById('modal');
    modal.classList.add('hidden');
}
document.getElementById('mobile-section').addEventListener('click', () => {
    hideModal();
})
document.getElementById('search-field').addEventListener('click', () => {
    hideModal();
})

