// The counter consists of a span and buttons, which,
// when clicked, should increase and decrease its value by one.

// Create a variable, counterValue, that will store
// the current counter value and initialize it with 0.

// Add listeners for clicks on the buttons; inside them,
// increase or decrease the value of the counter.

// Update the interface with the new value of the variable
// counterValue.
const refs = {
  decrementButton: document.querySelector('button[data-action="decrement"]'),
  incrementButton: document.querySelector('button[data-action="increment"]'),
  btnValue: document.querySelector('#value'),
};
console.log(refs);

let counterValue = 0;

// element.addEventListener(event, handler, options);

// const button = document.querySelector('.my-button');
// const handleClick = () => {
//   console.log('Button was clicked');
// };
// button.addEventListener('click', handleClick);

const handleClick1 = () => {
  counterValue -= 1;
  refs.btnValue.textContent = counterValue;
};

const handleClick2 = () => {
  counterValue += 1;
  refs.btnValue.textContent = counterValue;
};
refs.decrementButton.addEventListener('click', handleClick1);
refs.incrementButton.addEventListener('click', handleClick2);
