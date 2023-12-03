let numSquares = 6;
let colors = [];
let pickedColor;

const squares = document.querySelectorAll('.square');
const colorDisplay = document.getElementById('color-display');
const messageDisplay = document.getElementById('message');
const resetButton = document.getElementById('reset-btn');

init();

function init() {
  setupSquares();
  resetGame();
}

function setupSquares() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', function() {
      const clickedColor = this.style.backgroundColor;
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = 'Doğru!';
        changeColors(clickedColor);
        colorDisplay.style.backgroundColor = clickedColor;
        resetButton.textContent = 'Tekrar Oyna';
      } else {
        this.style.backgroundColor = '#f5f5f5';
        messageDisplay.textContent = 'Yanlış, tekrar dene.';
      }
    });
  }
}

function resetGame() {
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = 'Yeniden Başla';
  messageDisplay.textContent = '';

  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = 'block';
    } else {
      squares[i].style.display = 'none';
    }
  }

  colorDisplay.style.backgroundColor = '#34495e';
}

function changeColors(color) {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  const random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  const arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
} 