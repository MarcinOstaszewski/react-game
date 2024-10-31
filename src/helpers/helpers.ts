export const isPlayerOnFire = (playerIndex: number, firePositions: Set<number>): boolean => {
  return firePositions.has(playerIndex);
};