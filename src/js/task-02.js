const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// In HTML, there is an empty ul#ingredients list.
// Write a script that,
// for each element in the ingredients array:

// //1. Will create a separate <li> element.
// // Be sure to use the document.createElement() method.
// const listItem = document.createElement('li');
// // console.log(listItem);

// // 2.Will add the ingredient name as its text content.
// listItem.textContent = ingredients[0];
// // console.log(listItem);
// // 3.Will add the item class to the element.
// // elem.classList.add(cls);
// listItem.classList.add('item');
// console.log(listItem);
// // 4.Then will insert all <li>
// // to the ul.ingredients list in a single operation.

const arrayUlList = ingredients.map(el => {
  const items = document.createElement('li');
  items.textContent = el;
  items.classList.add('item');
  // console.log(items);
  return items;
  // const list = document.querySelector('#ingredients').prepend(items);
});

const ulContent = document.querySelector('#ingredients').append(...arrayUlList);
