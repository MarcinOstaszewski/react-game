import React from 'react';
import BoardSquares from './BoardSquares';
import { Color } from '../types/types';

interface GameBoardProps {
  color: Color;
  name: string;
  squares: number;
  playerPosition: number;
  firePositions: Set<number>;
  goalPosition: number;
}

const GameBoard: React.FC<GameBoardProps> = (
  { color, name, squares, playerPosition, firePositions, goalPosition }
) => {
  return (
    <div className="game-board">
      <BoardSquares
        color={color}
        name={name}
        squares={squares}
        goalPosition={goalPosition}
        playerPosition={playerPosition}
        firePositions={firePositions}
      />
    </div>
  );
};

export default GameBoard;