import React from 'react';
import './GameBoard.css';
import { Color } from '../types/types';
import Character from './Character';

interface GameBoardProps {
  color: Color;
  name: string;
  squares: null[];
  playerPosition: number;
  firePositions: Set<number>;
}

const GameBoard: React.FC<GameBoardProps> = (
  { color, name, squares, playerPosition, firePositions }
) => {

  return (
    <div className="game-board">
      {squares.map((_, index) => {
        let className = '';
        if (index === playerPosition) {
          return <Character key={index} color={color} name={name} index={index} />;
        } else if (firePositions.has(index)) {
          className = 'fire';
        }
        return <div key={index} className={className}></div>;
      })}
    </div>
  );
};

export default GameBoard;