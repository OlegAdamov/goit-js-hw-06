const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsUl = document.querySelector('ul');

const createIngredientsEl = ingredient => {
  
  const ingredientItem = document.createElement('li');
  ingredientItem.classList.add('item');
  ingredients.forEach(function () {
    ingredientItem.textContent = ingredient;
  });


  return ingredientItem;

}
const item = ingredients.map(createIngredientsEl);
ingredientsUl.append(...item)
