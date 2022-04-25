// Write a script that:

// Will count and display in the console the number of categories in ul#categories,
// that is, li.item elements.

const categoriesEl = document.querySelectorAll('.item').length;
console.log('Number of categories:', categoriesEl);

// For each li.item element in the ul#categories list,
// will find and display in the console the element header text(<h2> tag)

// const headerTextEl = document.querySelectorAll('.item').forEach(el => {
//   console.log('Category:', el.querySelectorAll('h2').textContent);
// });

// // and the number of elements in the category(all nested < li >).

// const numberOfElsEl = document.querySelectorAll('.item').forEach(el => {
//   console.log(
//     'Category:',
//     el.querySelector('h2').textContent,
//     'Elements',
//     el.querySelectorAll('li').length,
//   );
// });

const numberOfElsEl = document.querySelectorAll('.item').forEach(el => {
  console.log(
    'Category:',
    el.firstElementChild.textContent,
    'Elements',
    el.lastElementChild.children.length,
  );
});
