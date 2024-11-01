import React, { useEffect, useState } from 'react';
import '../sass/GameBoardContainer.css';
import { Color } from '../types/types';
import { getGoalPosition, isPlayerOnFire } from '../helpers/helpers';
import { createGameBoard } from '../helpers/createGameBoard';
import { handleKeyDown } from '../helpers/handleKeyDown';
import GameBoard from './GameBoard';
import GameBoardDisplay from './GameBoardDisplay';
import { totalSquares } from '../constants/constants';

interface GameBoardContainerProps {
  color: Color;
  name: string;
}

const GameBoardContainer: React.FC<GameBoardContainerProps> = (
  { color, name }
) => {
  const [squares, setSquares] = useState<number>(0);
  const [goalPosition, setGoalPosition] = useState(0);
  const [playerPosition, setPlayerPosition] = useState(0);
  const [firePositions, setFirePositions] = useState(new Set<number>());
  const [healthPoints, setHealthPoints] = useState(10);
  const [points, setPoints] = useState(0);


  useEffect(() => {
    const { playerPosition, firePositions } = createGameBoard();
    setSquares(totalSquares);
    setPlayerPosition(playerPosition);
    setFirePositions(firePositions);
    setGoalPosition(getGoalPosition(playerPosition));
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', (e) => handleKeyDown(e, setPlayerPosition));
    return () => {
      window.removeEventListener('keydown', (e) => handleKeyDown(e, setPlayerPosition));
    };
  }, []);

  const healthPointLost = React.useCallback(() => {
    setHealthPoints((prevHealth) => Math.max(prevHealth - 1, 0));
  }, []);

  const pointGained = React.useCallback(() => {
    setPoints((prevPoints) => prevPoints + 1);
    setGoalPosition(getGoalPosition(playerPosition));
  }, [playerPosition]);

  useEffect(() => {
    if (isPlayerOnFire(playerPosition, firePositions)) {
      healthPointLost();
      const interval = setInterval(() => {
        healthPointLost();
      }, 500);
      return () => clearInterval(interval);
    }
    if (playerPosition === goalPosition) {
      pointGained();
    }
  }, [playerPosition, firePositions, goalPosition, healthPointLost, pointGained]);

  return (
    <div className="game-board-container">
      <GameBoard
        color={color}
        name={name}
        squares={squares}
        goalPosition={goalPosition}
        playerPosition={playerPosition}
        firePositions={firePositions}
      />
      <GameBoardDisplay
        healthPoints={healthPoints}
        points={points}
      />
    </div>
  );
};

export default GameBoardContainer;