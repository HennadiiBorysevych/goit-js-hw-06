const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsList = document.querySelector("#ingredients");
console.log(ingredientsList);

const listItems = ingredients.map((el) => {
const ingredient = document.createElement("li");
  ingredient.textContent = el;

  ingredientsList.append(ingredient);

  return ingredient;
})
