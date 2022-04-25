// Write a script that responds to changes
// in the value of input#font - size - control(input event)
//  and changes the inline style of span#text by updating
// the font - size property.As a result, the text size
// will change responding to scrollbar dragging.

const refs = {
  scrollbarInput: document.querySelector('#font-size-control'),
  textSpan: document.querySelector('#text'),
};

const inputHandler = () => {
  const size = refs.scrollbarInput.value;
  refs.textSpan.style.fontSize = `${size}px`;
};

refs.scrollbarInput.addEventListener('change', inputHandler);
