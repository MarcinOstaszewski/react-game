import React from 'react';

interface Color {
  r: number;
  g: number;
  b: number;
}

interface CurrentColorDisplayProps {
  color: Color;
}

const CurrentColorDisplay: React.FC<CurrentColorDisplayProps> = ({ color }) => {
  return (
    <div>
      <label htmlFor="current-color">Current color:</label>
      <div
        className="current-color"
        style={{
          backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})`
        }}
      ></div>
    </div>
  );
};

export default CurrentColorDisplay;