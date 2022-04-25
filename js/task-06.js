// Write a script that, when focus on input is lost(blur event),
// checks its contents for the correct number of entered characters.
// The number of characters in the input is specified
// in its data - length attribute.
// If the number of characters entered is correct,
// the input's border turns green, or red with a wrong number.
// To add styles, use the valid and invalid CSS classes,
//  which you can find in the task source files.

const textInput = document.querySelector('#validation-input');

// function checkInputLength(event) {
//   if (
//     event.currentTarget.value.length > Number(textInput.dataset.length) ||
//     event.currentTarget.value.length < Number(textInput.dataset.length)
//   ) {
//     return textInput.classList.add('invalid');
//   }
//   return textInput.classList.replace('invalid', 'valid');
// }

function checkInputLength(event) {
  const number = Number(textInput.dataset.length);
  if (
    event.currentTarget.value.length !== number ||
    event.currentTarget.value.length === 0
  ) {
    return textInput.classList.add('invalid');
  }

  return textInput.classList.replace('invalid', 'valid');
}

textInput.addEventListener('blur', checkInputLength);
// ------------

// event.currentTarget is the element on which
// the event handler is executed.

// To get the value of data-attribute,
// the dataset property is used, followed by the attribute name.
//const saveBtn = document.querySelector('button[data-action="save"]');
//console.log(saveBtn.dataset.action); // "save"

// const textInput = document.querySelector('.text-input');
// const setFocusBtn = document.querySelector('[data-action="set"]');
// const removeFocusBtn = document.querySelector('[data-action="remove"]');

// setFocusBtn.addEventListener('click', () => {
//   textInput.focus();
// });

// removeFocusBtn.addEventListener('click', () => {
//   textInput.blur();
// });

// textInput.addEventListener('focus', () => {
//   textInput.value = 'This input has focus';
// });

// textInput.addEventListener('blur', () => {
//   textInput.value = '';
// });
