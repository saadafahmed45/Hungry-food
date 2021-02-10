const itemsName = document.getElementById('item-name');
const undifineMessage = document.getElementById('error-message');

const getFoodItems = () => {
    fetch (`https://www.themealdb.com/api/json/v1/1/search.php?s=${itemsName.value}`)
    .then (res => res.json())
    .then (data => displaySearchResult(data.meals))
    .catch(error => {
        undifineMessage.style.display = 'block';
    })
}

const displaySearchResult = meals => {
    const foodItems = document.getElementById('food-items');
    meals.forEach(meal => {
        const divMeal = document.createElement('div');
        divMeal.className = 'meal-item';
        const displayMeal = `
        <img src="${meal.strMealThumb}" onclick="showDetails('${meal.strMeal}')">
        <h5 onclick="showDetails('${meal.strMeal}')">${meal.strMeal}</h5>
        `;
        divMeal.innerHTML = displayMeal;
        foodItems.appendChild(divMeal);
    });
        
}

const showDetails = mealName => {
    fetch (`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
    .then (res => res.json())
    .then (data => renderFoodDetails(data.meals[0]))
}




              // Dynamic  


                    
const renderFoodDetails = mealData => {
    const showDetails = document.getElementById('show-details');
    const detailsAllDiv = document.createElement('div');
    detailsAllDiv.className = 'meal-details';
    const mealDetails = `
    <img src="${mealData.strMealThumb}" class="">
    <h2 class="py-3">${mealData.strMeal}</h2>
    <h5 class="pb-2">Ingredients</h5>
    <ul>
    <li><i class="fas fa-check-square"></i> ${mealData.strMeasure1 + ' ' + mealData.strIngredient1}</li>
    <li><i class="fas fa-check-square"></i> ${mealData.strMeasure2 + ' ' + mealData.strIngredient2}</li>
    <li><i class="fas fa-check-square"></i> ${mealData.strMeasure3 + ' ' + mealData.strIngredient3}</li>
    <li><i class="fas fa-check-square"></i> ${mealData.strMeasure4 + ' ' + mealData.strIngredient4}</li>
    <li><i class="fas fa-check-square"></i> ${mealData.strMeasure5 + ' ' + mealData.strIngredient5}</li>
    <li><i class="fas fa-check-square"></i> ${mealData.strMeasure6 + ' ' + mealData.strIngredient6}</li>
    <li><i class="fas fa-check-square"></i> ${mealData.strMeasure7 + ' ' + mealData.strIngredient7}</li>
    <li><i class="fas fa-check-square"></i> ${mealData.strMeasure8 + ' ' + mealData.strIngredient8}</li>
    <li><i class="fas fa-check-square"></i> ${mealData.strMeasure9 + ' ' + mealData.strIngredient9}</li>
    <li><i class="fas fa-check-square"></i> ${mealData.strMeasure10 + ' ' + mealData.strIngredient10}</li>
   
    </ul>
    `;
    detailsAllDiv.innerHTML = mealDetails;
    showDetails.appendChild(detailsAllDiv);
}