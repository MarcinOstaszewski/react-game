import React from 'react';

interface ColorSliderProps {
  colorKey: string;
  color: { [key: string]: number };
  handleColorChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ColorSlider: React.FC<ColorSliderProps> = ({ colorKey, color, handleColorChange }) => {
  return (
    <div key={colorKey}>
      <label htmlFor={colorKey}>{colorKey.toUpperCase()}:</label>
      <input
        type="range"
        id={colorKey}
        name={colorKey}
        min="0"
        max="255"
        value={color[colorKey as keyof typeof color]}
        onChange={handleColorChange}
      />
    </div>
  );
};

export default ColorSlider;