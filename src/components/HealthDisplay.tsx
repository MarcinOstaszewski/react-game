import React from 'react';

interface HealthDisplayProps {
  healthPoints: number;
}

const HealthDisplay: React.FC<HealthDisplayProps> = ({ healthPoints }) => {
  const getColor = (hp: number) => {
    const green = Math.floor((hp / 10) * 255);
    const red = 255 - green;
    return `rgb(${red}, ${green}, 0)`;
  };

  const getWidth = (hp: number) => {
    return `${(hp / 10) * 100}%`;
  };

  return (
    <div className="health-display">
      <div
        style={{
          width: getWidth(healthPoints),
          backgroundColor: getColor(healthPoints),
        }}
      ></div>
    </div>
  );
};

export default HealthDisplay;