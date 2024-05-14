import GameBoard from './gameBoard';

export default class Player {
  constructor() {
    this.playerBoard = new GameBoard();
  }
  getBoard() {
    return this.playerBoard;
  }
}

// export default class Player {
//   constructor() {
//     this.remainingMoves = this.allMoves();
//     this.playerTurn = true;
//   }

//   allMoves() {
//     return Array.from({ length: 10 }, (_, i) =>
//       Array.from({ length: 10 }, (_, j) => [i, j])
//     ).flat();
//   }

//   // HELPER FUNCTION TO SEARCH REMAINING MOVES
//   searchRemainingMoves(childArray) {
//     return this.remainingMoves.some((move) =>
//       move.every((value, index) => value === childArray[index])
//     );
//   }

//   randomIndex(highValue) {
//     return Math.floor(Math.random() * highValue);
//   }

//   playerMove(row, column, computerBoard, playerBoard) {
//     computerBoard.receiveAttack([row, column]);

//     if (computerBoard.board[row][column] === '2') {
//       this.computerMove(playerBoard);
//     }
//   }

//   computerMove(playerBoard) {
//     const index = this.randomIndex(this.remainingMoves.length);
//     const move = this.remainingMoves[index];
//     this.remainingMoves.splice(index, 1);
//     const [row, column] = move;
//     const result = playerBoard.receiveAttack([row, column]);
//     return result;
//   }

//   adjacentMove(row, column, playerBoard) {
//     const possibleMoves = [
//       [row - 1, column], // Up
//       [row + 1, column], // Down
//       [row, column - 1], // Left
//       [row, column + 1], // Right
//     ].filter(
//       ([r, c]) =>
//         r >= 0 &&
//         r < 10 &&
//         c >= 0 &&
//         c < 10 &&
//         this.searchRemainingMoves([r, c])
//     );

//     if (possibleMoves.length === 0) {
//       return setTimeout(() => {
//         this.computerMove(playerBoard);
//       }, 500);
//     }

//     const [newRow, newColumn] =
//       possibleMoves[this.randomIndex(possibleMoves.length)];
//     const remainingMovesIndex = this.remainingMoves.findIndex(
//       ([r, c]) => r === newRow && c === newColumn
//     );
//     this.remainingMoves.splice(remainingMovesIndex, 1);

//     if (playerBoard.board[newRow][newColumn] === 0) {
//       return playerBoard.receiveAttack([newRow, newColumn]);
//     } else if (playerBoard.board[newRow][newColumn] === 1) {
//       playerBoard.receiveAttack([newRow, newColumn]);
//       return this.directedMove(row, column, newRow, newColumn, playerBoard);
//     }
//   }

//   directedMove(oldRow, oldColumn, newRow, newColumn, playerBoard) {
//     if (oldRow !== newRow && oldColumn !== newColumn) {
//       throw new Error('Invalid move. Rows and columns must be aligned.');
//     }

//     const isVerticalMove = oldColumn === newColumn;
//     const isPositiveDirection = isVerticalMove
//       ? newRow < oldRow
//       : newColumn > oldColumn;
//     const bookendRow = isVerticalMove ? oldRow : newRow;
//     const bookendColumn = isVerticalMove ? oldColumn : newColumn;
//     const direction = isVerticalMove ? 'row' : 'column';
//     const otherDirection = isVerticalMove ? 'column' : 'row';

//     const top = isPositiveDirection ? newRow : bookendRow - 1;
//     const bot = isPositiveDirection ? bookendRow + 1 : newRow;
//     const possibleMoves = [];

//     const newTop = top - 1;
//     const newBot = bot + 1;

//     if (top > 0 && this.searchRemainingMoves([newTop, bookendColumn])) {
//       possibleMoves.push(newTop);
//     }
//     if (bot < 9 && this.searchRemainingMoves([newBot, bookendColumn])) {
//       possibleMoves.push(newBot);
//     }

//     if (possibleMoves.length !== 0) {
//       const index = this.randomIndex(possibleMoves.length);
//       const newBookend = possibleMoves[index];
//       const remainingMovesIndex = this.remainingMoves.findIndex(
//         ([r, c]) => r === newBookend && c === bookendColumn
//       );
//       this.remainingMoves.splice(remainingMovesIndex, 1);

//       if (playerBoard.board[newBookend][bookendColumn] === 1) {
//         playerBoard.receiveAttack(newBookend, bookendColumn);
//         return this.directedMove(
//           newBookend,
//           bookendColumn,
//           bot,
//           newColumn,
//           playerBoard
//         );
//       } else if (playerBoard.board[newBookend][bookendColumn] === 0) {
//         return playerBoard.receiveAttack(newBookend, bookendColumn);
//       }
//     } else {
//       return this.computerMove(playerBoard);
//     }
//   }
// }
