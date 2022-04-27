function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Write a script to create and clear a collection of elements.
// The user enters the number of elements into input and
// clicks the New button, after which a collection is rendered.
// When you click on the Clear button, the collection is cleared.

// Create a createBoxes(amount) function that takes one parameter,
// a number.The function creates as many < div > as specified
// in amount and adds them to div#boxes.

// The dimensions of the very first <div> are 30px by 30px.
// Each element after the first one should be 10px wider
// and higher than the previous one.
// All elements must have a random HEX background color.
// Use the ready - made getRandomHexColor function to get a color.

// Create a destroyBoxes() function that clears the contents
// of div#boxes, thereby removing all created elements.

const refs = {
  createBtn: document.querySelector('button[data-create]'),
  destroyBtn: document.querySelector('button[data-destroy]'),
  divBoxes: document.querySelector('#boxes'),
  inputNumber: document.querySelector('input'),
};

// --------create---------------

let firstDivWidth = 20;
let firstDivHeight = 20;

function createBox(amount) {
  amount = refs.inputNumber.value;

  for (let i = 0; i < amount; i += 1) {
    const newDiv = document.createElement('div');
    if (firstDivWidth > newDiv.style.width) {
      firstDivWidth += 10;
      firstDivHeight += 10;
    } else {
      firstDivWidth = 20;
      firstDivHeight = 20;
      const firstDiv = document.createElement('div');
      firstDiv.style.width = `${firstDivWidth}px`;
      firstDiv.style.height = `${firstDivHeight}px`;
      firstDiv.style.backgroundColor = getRandomHexColor();
      console.log(`${firstDivHeight} alalalalalal`);
      refs.divBoxes.append(firstDiv);
    }
    newDiv.style.width = `${firstDivWidth}px`;
    newDiv.style.height = `${firstDivHeight}px`;
    newDiv.style.backgroundColor = getRandomHexColor();
    refs.divBoxes.append(newDiv);
    console.log(newDiv);
    console.log(newDiv.style.width);
    console.log(newDiv.previousElementSibling);
  }
}

refs.createBtn.addEventListener('click', event => {
  createBox(event);
});
// -----------destroy-----------------------
refs.destroyBtn.addEventListener('click', () => {
  for (let i = 0; i < refs.divBoxes.children.length; i++) {
    console.log([i]);
    refs.divBoxes.children[i].remove();
    [i] = [i - 1];
  }
  firstDivHeight = 20;
  firstDivWidth = 20;
});

// // module 6 video1 1h32m, 40m -2 options

// function createBoxes(amount) {
//   const arrayBoxes = [];
//   for (let i = 1; i <= amount; i += 1) {
//     const element = document.createElement('div');
//     element.style.margin = 'auto';
//     element.style.width = `${30 + 10 * i}px`;
//     element.style.height = `${30 + 10 * i}px`;
//     element.style.backgroundColor = getRandomHexColor();
//     arrayBoxes.push(element);
//   }
//   return arrayBoxes;
// }

// function onButtonCreateBoxes() {
//   const boxes = createBoxes(refs.numberInput.value);
//   refs.divBoxes.append(...boxes);
// }

// If you write an empty string to the innerHTML property,
// the content of the element will be cleared.
// This is an easy and quick way to delete all content.

// function destroyBoxes() {
//   refs.divBoxes.innerHTML = '';
//   // refs.divBoxes.remove();
// }

// console.log(refs.divBoxes.children.length);
// refs.destroyBtn.addEventListener('click', destroyBoxes);

// refs.createBtn.addEventListener('click', onButtonCreateBoxes);
// refs.destroyBtn.addEventListener('click', destroyBoxes);

// -----
// function destroyBoxes()
// // document.createElement('div');
// element.after(el1, el2, ...)
// // adds one or more elements after the element element.
// divBoxes.remove();

// -----
// const button = document.querySelector(".my-button");
// const handleClick = () => {
//   console.log("Button was clicked");
// };
// button.addEventListener("click", handleClick);
// ----
// to clear input
// data attribute + click + function

// refs.createBtn.addEventListener('click', event => {
//   createBox(event);
// });
