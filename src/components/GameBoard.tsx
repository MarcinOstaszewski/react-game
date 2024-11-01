import React, { useEffect, useState } from 'react';
import '../sass/GameBoard.css';
import { Color } from '../types/types';
import { isPlayerOnFire } from '../helpers/helpers';
import HealthDisplay from './HealthDisplay';
import BoardSquares from './BoardSqares';
import { createGameBoard } from '../helpers/createGameBoard';
import { handleKeyDown } from '../helpers/handleKeyDown';

interface GameBoardProps {
  color: Color;
  name: string;
}

const GameBoard: React.FC<GameBoardProps> = (
  { color, name }
) => {
  const [squares, setSquares] = useState<number>(0);
  const [playerPosition, setPlayerPosition] = useState(0);
  const [firePositions, setFirePositions] = useState(new Set<number>());
  const [healthPoints, setHealthPoints] = useState(10);

  useEffect(() => {
    const { totalSquares, playerPosition, firePositions } = createGameBoard();
    setSquares(totalSquares);
    setPlayerPosition(playerPosition);
    setFirePositions(firePositions);
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', (e) => handleKeyDown(e, setPlayerPosition));
    return () => {
      window.removeEventListener('keydown', (e) => handleKeyDown(e, setPlayerPosition));
    };
  }, []);


  const healthPointLost = () => {
    setHealthPoints((prevHealth) => Math.max(prevHealth - 1, 0))
  };

  useEffect(() => {
    if (isPlayerOnFire(playerPosition, firePositions)) {
      healthPointLost();
      const interval = setInterval(() => {
        healthPointLost();
      }, 500);
      return () => clearInterval(interval);
    }
  }, [playerPosition, firePositions]);

  return (
    <div className="game-board-container">
      <div className="game-board">
        <BoardSquares
          squares={squares} 
          playerIndex={playerPosition} 
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