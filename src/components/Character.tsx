import React from 'react';
import { Color } from '../types/types';

interface CharacterProps {
  color: Color;
  name: string;
  index: number;
}

const Character: React.FC<CharacterProps> = ({ color, name, index }) => {
  const getPlayerStyle = (color: Color, property: string) => ({
    [property]: `rgb(${color.r}, ${color.g}, ${color.b})`,
  });

  return (
    <div key={index} className="player" style={getPlayerStyle(color, 'backgroundColor')}>
      <div className="player-name" style={getPlayerStyle(color, 'color')}>{name}</div>
    </div>
  );
};

export default Character;