const cellElements = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board');
const winningMessageText = document.querySelector('[data-winning-message-text]')
const winningMessageElement = document.getElementById('winning-message')
const restartButton = document.getElementById('restartButton')
const xClass = 'x';
const circleClass = 'circle';
let circleTurn;
const winningCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

startGame()

restartButton.addEventListener('click', startGame)

function startGame () {
  circleTurn = false;
  cellElements.forEach(cell => {
    cell.classList.remove(xClass);
    cell.classList.remove(circleClass);
    cell.removeEventListener('click', handleClick)
    cell.addEventListener('click', handleClick, {once: true})
  })
  hoverOverBoard()
  winningMessageElement.classList.remove('show')
}

function handleClick (event) {
  const cell = event.target;
  const currentClass = circleTurn ? circleClass : xClass;
  placeEntry(cell, currentClass)
  if (checkWin(currentClass)) {
    endGame(false)
  } else if (isDraw()) {
    endGame(true)
  } else {
    swapTurn()
    hoverOverBoard()
  }
}

function endGame(draw) {
  if (draw) {
    winningMessageText.innerText = 'Draw!'
  } else {
    winningMessageText.innerText = `${circleTurn ? "O's" : "X's"} Wins!`;
  }
  winningMessageElement.classList.add('show')
}

function isDraw() {
  return [...cellElements].every(cell => {
    return cell.classList.contains(xClass) || cell.classList.contains(circleClass);
  })
}

function placeEntry (cell, currentClass) {
  cell.classList.add(currentClass)
}

function swapTurn() {
  circleTurn = !circleTurn
}

function hoverOverBoard() {
  board.classList.remove(xClass);
  board.classList.remove(circleClass);
  if (circleTurn) {
    board.classList.add(circleClass);
  } else {
    board.classList.add(xClass);
  }
}

function checkWin(currentClass) {
  return winningCombination.some(combination => {
    return combination.every(index => {
      return cellElements[index].classList.contains(currentClass)
    })
  })
}