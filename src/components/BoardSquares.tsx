import React from 'react';
import Character from './Character';
import { Color } from '../types/types';

interface BoardSquaresProps {
  squares: number;
  playerPosition: number;
  color: Color;
  name: string;
  firePositions: Set<number>;
  goalPosition: number;
}

const BoardSquares: React.FC<BoardSquaresProps> = ({ squares, playerPosition, color, name, firePositions, goalPosition }) => {
  const elements = [];

  for (let index = 0; index < squares; index++) {
    if (index === playerPosition) {
      elements.push(
        <Character
          key={index}
          color={color}
          name={name}
          index={index}
        />
      );
    } else if (firePositions.has(index)) {
      elements.push(<div key={index} className="fire"></div>);
    } else if (index === goalPosition) {
      elements.push(<div key={index} className="goal"></div>);
    } else {
      elements.push(<div key={index}></div>);
    }
  }

  return <>{elements}</>;
};

export default BoardSquares;