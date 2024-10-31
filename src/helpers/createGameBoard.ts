export function createGameBoard(boardSize: number) {
  const totalSquares = boardSize * boardSize;
  const squares: null[] = Array(totalSquares).fill(null);

  // Randomly place the player and obstacles
  const playerPosition = Math.floor(Math.random() * totalSquares);
  const firePositions = new Set<number>();
  while (firePositions.size < 10) { // Adjust the number of obstacles as needed
    const firePosition = Math.floor(Math.random() * totalSquares);
    if (firePosition !== playerPosition) {
      firePositions.add(firePosition);
    }
  }
  return { squares, playerPosition, firePositions };
}