export default class Ship {
  constructor(name, length) {
    this.length = length;
    this.hits = 0;
    this.sunk = false;
    this.name = name;
    this.rotated = false;
    this.placement = [];
    this.placed = false;
  }

  hit() {
    return this.hits++;
  }

  isSunk() {
    return this.hits === this.length ? (this.sunk = true) : this.sunk;
  }

  shipPlaced() {
    return this.placement.length > 0 ? (this.placed = true) : this.placed;
  }

  rotate() {
    this.rotated = !this.rotated;
  }
}
