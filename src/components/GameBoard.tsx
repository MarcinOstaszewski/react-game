import React, { useEffect, useState } from 'react';
import '../sass/GameBoard.css';
import { Color } from '../types/types';
import { useArrowPressed } from '../hooks/useArrowPressed';
import { isPlayerOnFire } from '../helpers/helpers';
import HealthDisplay from './HealthDisplay';
import BoardSquares from './BoardSqares';

interface GameBoardProps {
  color: Color;
  name: string;
  squares: number;
  playerPosition: number;
  firePositions: Set<number>;
}

const GameBoard: React.FC<GameBoardProps> = (
  { color, name, squares, playerPosition, firePositions }
) => {
  const [healthPoints, setHealthPoints] = useState(10);
  const [playerIndex, setPlayerIndex] = useState(playerPosition);
  const index = useArrowPressed(playerPosition);

  useEffect(() => {
    setPlayerIndex(index);
  }, [index]);

  const healthPointLost = () => {
    setHealthPoints((prevHealth) => Math.max(prevHealth - 1, 0))
  };

  useEffect(() => {
    if (isPlayerOnFire(playerIndex, firePositions)) {
      healthPointLost();
      const interval = setInterval(() => {
        healthPointLost();
      }, 500);
      return () => clearInterval(interval);
    }
  }, [playerIndex, firePositions]);

  return (
    <div className="game-board-container">
      <div className="game-board">
        <BoardSquares
          squares={squares} 
          playerIndex={playerIndex} 
          color={color} 
          name={name} 
          firePositions={firePositions} 
        />
      </div>
      <div className="game-board-display">
        <div className="points-display">Points: {0}</div>
        <HealthDisplay healthPoints={healthPoints} />
      </div>
    </div>
  );
};

export default GameBoard;