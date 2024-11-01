import React from 'react';
import HealthDisplay from './HealthDisplay';

interface GameBoardDisplayProps {
  healthPoints: number;
  points: number;
}

const GameBoardDisplay: React.FC<GameBoardDisplayProps> = ({ healthPoints, points }) => {
  return (
    <div className="game-board-display">
      <div className="points-display">Points: {points}</div>
      <HealthDisplay healthPoints={healthPoints} />
    </div>
  );
};

export default GameBoardDisplay;