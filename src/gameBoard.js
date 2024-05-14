import Ship from './ship';

export default class GameBoard {
  constructor() {
    this.board = this.createBoard();
    this.ships = {
      0: new Ship('destroyer', 1),
      1: new Ship('submarine', 2),
      2: new Ship('cruiser', 3),
      3: new Ship('battleship', 4),
      4: new Ship('carrier', 5),
    };
  }
  createBoard() {
    let board = new Array(10).fill('x').map(() => new Array(10).fill('x'));
    return board;
  }

  getBoard() {
    return this.board;
  }

  allShipsPlaced() {
    for (const key in this.ships) {
      if (!this.ships[key].shipPlaced()) {
        return false; // At least one ship not placed
      }
    }
    return true; // All ships placed
  }

  checkOccupied(board, ver, hor, length, rotated) {
    // Horizontal
    if (!rotated) {
      for (let i = hor; i < hor + length; i++) {
        if (board[ver][i] !== 'x') {
          return true;
        }
      }
    }
    // Vertical
    if (rotated) {
      for (let j = ver; j < ver + length; j++) {
        if (board[j][hor] !== 'x') {
          return true;
        }
      }
    }
    return false;
  }

  placeShip(ship, selection) {
    // IsOutOfBounds
    let [ver, hor] = selection;
    const boardSize = this.board.length;
    let isOutOfBounds = false;

    // Check Out of Bounds
    if (
      (!ship.rotated && hor + ship.length > boardSize) ||
      (ship.rotated && ver + ship.length > boardSize)
    ) {
      isOutOfBounds = true;
      return this.board;
    }

    // Check Occupied
    const occupied = this.checkOccupied(
      this.board,
      ver,
      hor,
      ship.length,
      ship.rotated
    );

    // Return Board if occupied
    if (occupied) {
      return this.board;
    }

    // Place ship on the board
    if (!isOutOfBounds && !occupied) {
      // Horizontal Place
      if (!ship.rotated) {
        for (let i = hor; i < hor + ship.length; i++) {
          this.board[ver][i] = '1';
          let coord = [ver, i];
          ship.placement.push(coord);
          ship.shipPlaced();
        }
      }
      // Vertical Place
      if (ship.rotated) {
        for (let j = ver; j < ver + ship.length; j++) {
          this.board[j][hor] = '1';
          let coord = [j, hor];
          ship.placement.push(coord);
          ship.shipPlaced();
        }
      }
    }

    // Return Board
    return this.board;
  }

  receiveAttack(selection) {
    let [ver, hor] = selection;
    // Mark Miss
    if (this.board[ver][hor] === 'x') this.board[ver][hor] = '2';
    //Mark Hit
    if (this.board[ver][hor] === '1') {
      this.board[ver][hor] = '3';

      //Record Hit on Ship
      let coord = [ver, hor];
      let ships = Object.values(this.ships);
      ships.forEach((ship) => {
        ship.placement.forEach((shipCoord) => {
          if (shipCoord[0] === coord[0] && shipCoord[1] === coord[1]) {
            ship.hit();
            ship.isSunk();
          }
        });
      });
    }
    return this.board;
  }
  reportSunk() {
    let allSunk = false;
    let counter = 0;

    const ships = Object.values(this.ships);
    ships.forEach((ship) => {
      ship.isSunk();
      if (ship.sunk) {
        counter++;
      }
    });

    if (counter === 5) {
      allSunk = true;
    }
    return allSunk;
  }
  // setupComplete() {
  //   let gameStart = false;
  //   let counter = 0;
  //   let ships = Object.values(this.ships);
  //   ships.forEach((ship) => {
  //     ships[ship].shipPlaced();
  //     if (ships[ship].placed) {
  //       counter++;
  //     }
  //   });
  // }
}
