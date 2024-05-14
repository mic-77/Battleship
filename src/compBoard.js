import GameBoard from './gameBoard';
import Player from './player';

const randomStartIndex = (highValue) => Math.floor(Math.random() * highValue);

const randomBoolean = () => Math.random() < 0.5;

const ComputerPlayer = () => {
  const computerPlayer = new Player();
  const compBoard = computerPlayer.playerBoard;
  const compShips = compBoard.ships;

  const allBoardBlocks = document.querySelectorAll('#computer div');

  // Assign Random Rotation
  function shipRandomRotation() {
    return Object.values(compShips).forEach((ship) => {
      ship.rotated = randomBoolean();
    });
  }
  shipRandomRotation();
  const getCompBoard = () => compBoard;

  const computerSelection = (rotated, length) => {
    const ver = rotated ? randomStartIndex(10 - length) : randomStartIndex(10);

    const hor = rotated ? randomStartIndex(10) : randomStartIndex(10 - length);

    const selection = [ver, hor];
    return selection;
  };

  const placeingRandomShip = () => {
    let allShipsPlaced = false;

    while (!allShipsPlaced) {
      allShipsPlaced = true;

      Object.values(compShips).forEach((ship) => {
        if (!ship.placed) {
          let selection = computerSelection(ship.rotated, ship.length);
          compBoard.placeShip(ship, selection);

          if (ship.placement.length === ship.length) {
            ship.placed = true;
          } else {
            allShipsPlaced = false;
          }

          let shipBlocks = [];
          // Access the name and placement properties
          const { name, placement } = ship;
          // Iterate over each placement coordinate
          placement.forEach((coordinate) => {
            const [ver, hor] = coordinate;
            // Calculate the block index
            const blockNum = Number(`${ver}${hor}`);
            // Push the corresponding block to the shipBlocks array
            shipBlocks.push(allBoardBlocks[blockNum]);
          });
          // Apply class to each ship block
          shipBlocks.forEach((shipBlock) => {
            shipBlock.classList.add(name);
            shipBlock.classList.add('taken');
          });
        }
      });
    }
  };

  placeingRandomShip();

  return { computerPlayer, compBoard, getCompBoard };
};

export default ComputerPlayer;

// compBoard.placeShip();
// console.log(computerSelection(true, 3));

// Object.values(compShips).forEach((ship) => {
//   alternateRotate(ship);
// });

// const placeShipWithSecureSpot = (ship) => {
//   let shipCoords;
//   do {
//     shipCoords = secureSpot(ship);
//     compBoard.placeShip(ship, [shipCoords.row, shipCoords.column]);
//   } while (ship.placeShip.length === 0);
// };
// placeShipWithSecureSpot(compShips.ship1);
// placeShipWithSecureSpot(compShips.ship2);
// placeShipWithSecureSpot(compShips.ship3);
// placeShipWithSecureSpot(compShips.ship4);
// placeShipWithSecureSpot(compShips.ship5);
