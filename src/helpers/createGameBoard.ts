import { gameBoardSize } from "../constants/constants";

export function createGameBoard() {
  const totalSquares = gameBoardSize * gameBoardSize;

  // Randomly place the player and obstacles
  const playerPosition = Math.floor(Math.random() * totalSquares);
  const firePositions = new Set<number>();
  while (firePositions.size < 10) { // Adjust the number of obstacles as needed
    const firePosition = Math.floor(Math.random() * totalSquares);
    if (firePosition !== playerPosition) {
      firePositions.add(firePosition);
    }
  }
  return { totalSquares, playerPosition, firePositions };
}