const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredientsRef = document.querySelector('#ingredients');


const itemsIngredientsRef = ingredients.map(ingredient => {
  const itemElementRef = document.createElement('li');
  
  itemElementRef.classList.add('item');
  itemElementRef.textContent = ingredient;

  return itemElementRef;


});

listIngredientsRef.append(...itemsIngredientsRef);




