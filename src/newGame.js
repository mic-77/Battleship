import Player from './player';
import ComputerPlayer from './compBoard';

export default function newGame() {
  let player = new Player();
  const computerPlayer = ComputerPlayer();
  let pBoard = player.playerBoard;
  let cBoard = computerPlayer.compBoard;

  //Testing
  // pBoard.placeShip(pBoard.ships[0], [0, 0]);
  // pBoard.placeShip(pBoard.ships[1], [1, 0]);
  // pBoard.placeShip(pBoard.ships[2], [2, 0]);
  // pBoard.placeShip(pBoard.ships[3], [3, 0]);
  // pBoard.placeShip(pBoard.ships[4], [4, 0]);
  // //Testing
  // cBoard.placeShip(cBoard.ships[0], [5, 0]);
  // cBoard.placeShip(cBoard.ships[1], [6, 0]);
  // cBoard.placeShip(cBoard.ships[2], [7, 0]);
  // cBoard.placeShip(cBoard.ships[3], [8, 0]);
  // cBoard.placeShip(cBoard.ships[4], [9, 0]);

  return {
    player,
    computerPlayer,
    pBoard,
    cBoard,
  };
}
