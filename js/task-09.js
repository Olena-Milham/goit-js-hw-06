function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Write a script that changes the background colors
// of the < body > element via inline style

// when clicking on button.change - color
// and outputs the color value to span.color.

// Use the getRandomHexColor function to generate a random color.

const refs = {
  background: document.querySelector('body'),
  changeColorBtn: document.querySelector('.change-color'),
  colorOutput: document.querySelector('.color'),
};

const handleClick = () => {
  const changeColor = getRandomHexColor();
  refs.background.style.backgroundColor = changeColor;
  refs.colorOutput.textContent = changeColor;

  // rgb
  // refs.background.style.backgroundColor = getRandomHexColor();
  // refs.colorOutput.textContent = refs.background.style.backgroundColor;
};

refs.changeColorBtn.addEventListener('click', handleClick);
