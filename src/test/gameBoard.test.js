import GameBoard from '../gameBoard.js';

let gameBoard = new GameBoard();
let board = gameBoard.board;

describe('Testing Board', () => {
  test('Whether have a board', () => {
    expect(board).toEqual([
      ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
    ]);
  });

  test('gameBoard.placeShip(ship5, [4,6]) out-of-bounds returns original board', () => {
    expect(gameBoard.placeShip(gameBoard.ships.ship5, [4, 6])).toStrictEqual([
      ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
    ]);
  });

  test('gameBoard.placeShip(ship5, [4, 5]) returns 1s horizontally starting at board[4][5]]', () => {
    expect(gameBoard.placeShip(gameBoard.ships.ship5, [4, 5])).toStrictEqual([
      ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', '1', '1', '1', '1', '1'],
      ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
    ]);
  });
  //test vertical
  gameBoard.ships.ship4.rotate();
  test('gameBoard.placeShip ship 4 Rotate, 7, 5) out-of-bounds returns original board', () => {
    expect(gameBoard.placeShip(gameBoard.ships.ship4, [7, 5])).toStrictEqual([
      ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', '1', '1', '1', '1', '1'],
      ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
    ]);
  });
  test('gameBoard.placeShip(ship4 Rotate, 5, 5) returns 1s vertically starting at board[5][5]]', () => {
    expect(gameBoard.placeShip(gameBoard.ships.ship4, [5, 5])).toStrictEqual([
      ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', '1', '1', '1', '1', '1'],
      ['x', 'x', 'x', 'x', 'x', '1', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', '1', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', '1', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', '1', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
    ]);
  });
  //Return if occupied
  test('gameBoard.placeShip(ship4 Rotate, [3, 8]) conflict w placed ships returns original board', () => {
    expect(gameBoard.placeShip(gameBoard.ships.ship4, [3, 8])).toStrictEqual([
      ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', '1', '1', '1', '1', '1'],
      ['x', 'x', 'x', 'x', 'x', '1', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', '1', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', '1', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', '1', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
    ]);
  });
  test('gameBoard.receiveAttack(1,2) changes board coordinate to 2 for MISS', () => {
    expect(gameBoard.receiveAttack([1, 2])).toStrictEqual([
      ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
      ['x', 'x', '2', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', '1', '1', '1', '1', '1'],
      ['x', 'x', 'x', 'x', 'x', '1', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', '1', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', '1', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', '1', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
    ]);
  });
  test('gameBoard.receiveAttack(4,6) changes board coordinate to 3 for HIT', () => {
    expect(gameBoard.receiveAttack([4, 6])).toStrictEqual([
      ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
      ['x', 'x', '2', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', '1', '3', '1', '1', '1'],
      ['x', 'x', 'x', 'x', 'x', '1', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', '1', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', '1', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', '1', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
    ]);
  });
  test('gameBoard.receiveAttack(4,7) adds HIT count to correct ship', () => {
    gameBoard.receiveAttack([4, 7]);
    expect(gameBoard.ships.ship5.hits).toBe(2);
  });
  test('gameBoard.ship5 has correct # hits', () => {
    gameBoard.receiveAttack([4, 5]);
    gameBoard.receiveAttack([4, 8]);
    gameBoard.receiveAttack([4, 9]);
    expect(gameBoard.ships.ship5.hits).toBe(5);
  });
  test('gameBoard = what is expected', () => {
    expect(board).toStrictEqual([
      ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
      ['x', 'x', '2', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', '3', '3', '3', '3', '3'],
      ['x', 'x', 'x', 'x', 'x', '1', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', '1', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', '1', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', '1', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
    ]);
  });
  test('gameBoard.ship5.sunk is TRUE after running reportSunk()', () => {
    gameBoard.reportSunk();
    expect(gameBoard.ships.ship5.sunk).toBe(true);
  });
  test('real gameover', () => {
    gameBoard.receiveAttack([5, 5]);
    gameBoard.receiveAttack([6, 5]);
    gameBoard.receiveAttack([7, 5]);
    gameBoard.receiveAttack([8, 5]);

    gameBoard.placeShip(gameBoard.ships.ship3, [0, 0]);
    gameBoard.receiveAttack([0, 0]);
    gameBoard.receiveAttack([0, 1]);
    gameBoard.receiveAttack([0, 2]);

    gameBoard.placeShip(gameBoard.ships.ship2, [2, 0]);
    gameBoard.receiveAttack([2, 0]);
    gameBoard.receiveAttack([2, 1]);

    gameBoard.placeShip(gameBoard.ships.ship1, [3, 0]);
    gameBoard.receiveAttack([3, 0]);

    gameBoard.reportSunk();

    expect(gameBoard.reportSunk()).toBe(true);
  });
});

// const board = GameBoard.createBoard();

// describe('Create Board', () => {
//   test('Whether have board', () => {
//     expect(board.getBoard()).toEqual([
//       ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
//       ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
//       ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
//       ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
//       ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
//       ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
//       ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
//       ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
//       ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
//       ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
//     ]);
//   });

//   test('Place Ship 3 to (0, 8) horizonatally out-ofbounds so returns original board', () => {
//     board.placeShip(Ship.createShip('cruiser', 3), [0, 0]);
//     expect(board.getBoard()).toEqual([
//       ['s', 's', 's', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
//       ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
//       ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
//       ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
//       ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
//       ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
//       ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
//       ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
//       ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
//       ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
//     ]);
//   });
