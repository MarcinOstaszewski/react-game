import React from 'react';
import Character from './Character';
import { Color } from '../types/types';

interface BoardSquaresProps {
  squares: number;
  playerIndex: number;
  color: Color;
  name: string;
  firePositions: Set<number>;
}

const BoardSquares: React.FC<BoardSquaresProps> = ({ squares, playerIndex, color, name, firePositions }) => {
  const elements = [];

  for (let index = 0; index < squares; index++) {
    if (index === playerIndex) {
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
    } else {
      elements.push(<div key={index}></div>);
    }
  }

  return <>{elements}</>;
};

export default BoardSquares;