import Ship from '../ship';

let testShip = new Ship(5);

test('hits initializes with 0', () => {
  expect(testShip.hits).toBe(0);
});

test('testShip.hits returns number of times hit method has run', () => {
  testShip.hit();
  testShip.hit();
  expect(testShip.hits).toBe(2);
});

test('Ship.isSunk() returns false when hits != length', () => {
  expect(testShip.isSunk()).toBe(false);
});

test('Ship.isSunk() returns true when hits == length', () => {
  testShip.hit();
  testShip.hit();
  testShip.hit();
  expect(testShip.isSunk()).toBe(true);
});
