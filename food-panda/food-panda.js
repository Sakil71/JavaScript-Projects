const allFood = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            const foodCard = document.getElementById('food-card');
            foodCard.innerText = '';

            data.meals.forEach(food => {
                const { strMeal, strMealThumb, strInstructions, idMeal } = food;
                const mealDiv = document.createElement('div');
                mealDiv.classList.add('shadow-2xl', 'bg-pink-700', 'rounded')

                mealDiv.innerHTML = `
                    <img class="rounded-t-lg h=96 md:h-60 lg:h-60 w-full" src='${strMealThumb}'>
                    <div class="px-4 py-2">
                        <h1 class="text-3xl">${strMeal}</h1>
                        <small class="opacity-80">${strInstructions.slice(0, 90)}...</small>
                        <div class="flex justify-center">
                            <button onclick="displayDetails(${idMeal})" class="w-full mt-4 border border-pink-400 rounded-sm block hover:bg-pink-500">Details</button>
                        </div>
                    </div>
            `
                foodCard.appendChild(mealDiv);
            })
        });
}

// Search Food Category
document.getElementById('search-button').addEventListener('click', () => {
    const searchField = document.getElementById('search-field');
    const category = document.getElementById('category');

    const searchFieldValue = searchField.value;

    if (searchFieldValue === '') {
        category.innerText = 'All';
    }
    else {
        category.innerText = searchFieldValue;
    }

    searchField.value = '';
    allFood(searchFieldValue);
})

//Details
const displayDetails = (idMeal) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
        .then(res => res.json())
        .then(data => {
            data.meals.forEach(food => {
                console.log(food)
                const details = document.getElementById('details');
                details.classList.add('w-1/2');
                details.classList.toggle("hidden");

                const foodCard = document.getElementById('food-card');
                foodCard.classList.add('grid-cols-1','lg:grid-cols-2', 'w-1/2')

                details.innerHTML = `
                    <img class="rounded-t-lg w-full" src='${food.strMealThumb}'>
                    <div class="px-4 py-2 relative">
                        <h1 class="text-3xl">${food.strMeal}</h1>
                        <h1 class="text-xl">Country: ${food.strArea}</h1> 
                                                                     
                        <small class="opacity-80">Instruction: ${food.strInstructions}</small>

                        <button onclick="hiideDetails()" class="absolute top-[-575px] right-[-5px]">
                        <img class="" src='images/x.png'>
                        </button>
                    </div>
                `
            })
        });

}

const hiideDetails = () =>{
    const details = document.getElementById('details');
    details.classList.toggle('hidden');
}


allFood('');

