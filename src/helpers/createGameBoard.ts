import { totalSquares } from "../constants/constants";
import { getRandomPosition } from "./helpers";

export function createGameBoard() {
  // Randomly place the player and obstacles
  const playerPosition = getRandomPosition(totalSquares);
  const firePositions = new Set<number>();
  while (firePositions.size < 10) { // Adjust the number of obstacles as needed
    const firePosition = getRandomPosition(totalSquares);
    if (firePosition !== playerPosition) {
      firePositions.add(firePosition);
    }
  }
  return { totalSquares, playerPosition, firePositions };
}