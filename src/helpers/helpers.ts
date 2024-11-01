import { totalSquares } from "../constants/constants";

export const isPlayerOnFire = (playerIndex: number, firePositions: Set<number>): boolean => {
  return firePositions.has(playerIndex);
};

export function getRandomPosition(totalSquares: number): number {
  return Math.floor(Math.random() * totalSquares);
}

export const getGoalPosition = (playerPosition: number): number => {
  let goalPosition = getRandomPosition(totalSquares);
  while (goalPosition === playerPosition) {
    goalPosition = getRandomPosition(totalSquares);
  }
  return goalPosition;
}