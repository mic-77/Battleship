import './styles.css';
import newGame from './newGame';

//////////////Setup HTML//////////
const gameInfoHTML = `
  <div id="game-info">
    <p>Turn: <span id="turn-display"></span></p>
    <p>Info: <span id="info"></span></p>
  </div>
  <div id="gameboards-container"></div>
  <div class="option-container">
    <div id="0" class="destroyer-preview destroyer" draggable="true"></div>
    <div id="1" class="submarine-preview submarine" draggable="true"></div>
    <div id="2" class="cruiser-preview cruiser" draggable="true"></div>
    <div id="3" class="battleship-preview battleship" draggable="true"></div>
    <div id="4" class="carrier-preview carrier" draggable="true"></div>
  </div>
  <button id="flip-button">flip</button>
    <button id="start-button">start</button>
`;
// Insert the HTML structure into the DOM
document.body.insertAdjacentHTML('beforeend', gameInfoHTML);

///////// DOM selector////////
const gameBoardsContainer = document.querySelector('#gameboards-container');
const flipButton = document.querySelector('#flip-button');
const optionContainer = document.querySelector('.option-container');
const startButton = document.querySelector('#start-button');
const inforDisplay = document.querySelector('#info');
const turnDisplay = document.querySelector('#turn-display');

//Board
// Creating Boards
const width = 10;
function createBoard(color, user) {
  const GBContainer = document.createElement('div');
  GBContainer.classList.add('game-board');
  GBContainer.style.backgroundColor = color;
  GBContainer.id = user;

  for (let i = 0; i < width * width; i++) {
    const block = document.createElement('div');
    block.classList.add('block');
    block.id = i;
    GBContainer.append(block);
  }

  gameBoardsContainer.append(GBContainer);
}
createBoard('yellow', 'player');
createBoard('pink', 'computer');

//Option Choosing

let angle = 0;
function flip() {
  const optionShips = Array.from(optionContainer.children);
  angle === 0 ? (angle = 90) : (angle = 0);

  optionShips.forEach(
    (optionShip) => (optionShip.style.transform = `rotate(${angle}deg)`)
  );
}
flipButton.addEventListener('click', flip);

// Drag Player Ships
let draggedShip;
const optionShips = Array.from(optionContainer.children);
optionShips.forEach((optionShip) =>
  optionShip.addEventListener('dragstart', dragStart)
);

const allPlayerBlocks = document.querySelectorAll('#player div');
allPlayerBlocks.forEach((playerBlock) => {
  playerBlock.addEventListener('dragover', dragOver);
  playerBlock.addEventListener('drop', dropShip);
});

let notDropped;

function dragStart(e) {
  notDropped = false;
  draggedShip = e.target;
}

function dragOver(e) {
  e.preventDefault();
}

function dropShip(e) {
  const startId = e.target.id;
  const ship = game.pBoard.ships[draggedShip.id];
  const selection = Array.from(String(startId), Number);
  let shipBlocks = [];
  angle === 0 ? (ship.rotated = false) : (ship.rotated = true);
  game.pBoard.placeShip(ship, selection);

  //Update From DOM Input
  ship.placement.forEach((coordinate) => {
    const [ver, hor] = coordinate;
    const blockNum = Number(`${ver}${hor}`);
    shipBlocks.push(allPlayerBlocks[blockNum]);

    if (!notDropped) draggedShip.remove();
  });
  shipBlocks.forEach((shipBlock) => {
    shipBlock.classList.add(ship.name);
    shipBlock.classList.add('taken');
  });
}

// Start Game ()
function startGame() {
  if (playerTurn === undefined) {
    if (!game.pBoard.allShipsPlaced()) {
      inforDisplay.textContent = 'Please Place all Your Ship first';
    } else {
      const allBoardBlocks = document.querySelectorAll('#computer div');
      allBoardBlocks.forEach((block) =>
        block.addEventListener('click', handleClick)
      );
      // }
      playerTurn = true;
      turnDisplay.textContent = 'Your Go';
      inforDisplay.textContent = 'The Game Has Started';
    }
  }
}
let playerTurn;

let playerHits = [];
let computerHits = [];
startButton.addEventListener('click', startGame);

let gameOver = false;
function handleClick(e) {
  if (!gameOver) {
    if (
      e.target.classList.contains('empty') ||
      e.target.classList.contains('boom')
    )
      return;

    const startId = e.target.id;
    const selection = Array.from(String(startId), Number);
    game.cBoard.receiveAttack(selection);

    if (e.target.classList.contains('taken')) {
      e.target.classList.add('boom');
      if (checkResult()) {
        return;
      }
      inforDisplay.textContent = 'You Hit the Computer Ship';
      // let classes = Array.from(e.target.classList);
      // classes = classes.filter((className) => className !== 'block');
      // classes = classes.filter((className) => className !== 'boom');
      // classes = classes.filter((className) => className !== 'taken');
      // playerHits.push(...classes);
    } else {
      e.target.classList.add('empty');
      inforDisplay.textContent = 'You Miss';
    }
    playerTurn = false;
    const allBoardBlocks = document.querySelectorAll('#computer div');
    allBoardBlocks.forEach((block) => block.replaceWith(block.cloneNode(true)));
    setTimeout(computerGo, 0);
  }
}

//Computer Action
function computerGo() {
  if (!gameOver) {
    turnDisplay.textContent = `Computer Go!`;
    inforDisplay.textContent = `Computer Thinking`;

    setTimeout(() => {
      let randomGo = Math.floor(Math.random() * width * width);
      const selection = Array.from(String(randomGo), Number);
      game.pBoard.receiveAttack(selection);
      const allBoardBlocks = document.querySelectorAll(`#player div`);
      if (
        allBoardBlocks[randomGo].classList.contains('empty') ||
        allBoardBlocks[randomGo].classList.contains('boom')
      ) {
        computerGo();
        return;
      } else if (
        allBoardBlocks[randomGo].classList.contains('taken') &&
        !allBoardBlocks[randomGo].classList.contains('boom')
      ) {
        allBoardBlocks[randomGo].classList.add('boom');
        if (checkResult()) {
          return;
        }
        inforDisplay.textContent = 'The Computer Hit Your Ship!';
        // let classes = Array.from(allBoardBlocks[randomGo].classList);
        // classes = classes.filter((className) => className !== 'block');
        // classes = classes.filter((className) => className !== 'boom');
        // classes = classes.filter((className) => className !== 'taken');
        // computerHits.push(...classes);
      } else {
        inforDisplay.textContent = 'You dodge the bullet';
        allBoardBlocks[randomGo].classList.add('empty');
      }
    }, 0);

    setTimeout(() => {
      if (!gameOver) {
        playerTurn = true;
        turnDisplay.textContent = `Your Go`;
        inforDisplay.textContent = 'Please select';
        const allBoardBlocks = document.querySelectorAll(`#computer div`);
        allBoardBlocks.forEach((block) =>
          block.addEventListener('click', handleClick)
        );
      }
    }, 0);
  }
}

function checkResult() {
  if (game.cBoard.reportSunk()) {
    inforDisplay.textContent = 'You Win';
    gameOver = true;
    return true;
  }
  if (game.pBoard.reportSunk()) {
    inforDisplay.textContent = 'You Lose';
    gameOver = true;
    return true;
  }
}

//Needa Call new Game
const game = new newGame();

// game.pBoard.receiveAttack([0, 0]);
// game.pBoard.receiveAttack([1, 0]);
// game.pBoard.receiveAttack([2, 0]);
// game.pBoard.receiveAttack([3, 0]);
// game.pBoard.receiveAttack([4, 0]);
// game.pBoard.receiveAttack([1, 1]);
// game.pBoard.receiveAttack([2, 1]);
// game.pBoard.receiveAttack([2, 2]);
// game.pBoard.receiveAttack([3, 1]);
// game.pBoard.receiveAttack([3, 2]);
// game.pBoard.receiveAttack([3, 3]);
// game.pBoard.receiveAttack([4, 1]);
// game.pBoard.receiveAttack([4, 2]);
// game.pBoard.receiveAttack([4, 3]);
// game.pBoard.receiveAttack([4, 4]);

// game.cBoard.receiveAttack([5, 0]);
// game.cBoard.receiveAttack([6, 0]);
// game.cBoard.receiveAttack([7, 0]);
// game.cBoard.receiveAttack([8, 0]);
// game.cBoard.receiveAttack([9, 0]);
// game.cBoard.receiveAttack([6, 1]);
// game.cBoard.receiveAttack([7, 1]);
// game.cBoard.receiveAttack([7, 2]);
// game.cBoard.receiveAttack([8, 1]);
// game.cBoard.receiveAttack([8, 2]);
// game.cBoard.receiveAttack([8, 3]);
// game.cBoard.receiveAttack([9, 1]);
// game.cBoard.receiveAttack([9, 2]);
// game.cBoard.receiveAttack([9, 3]);
// game.cBoard.receiveAttack([9, 4]);
// game.cBoard.receiveAttack([9, 5]);
