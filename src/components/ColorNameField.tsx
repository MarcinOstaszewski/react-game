// import debounce from '../helpers/debounce';
import React from 'react';

interface ColorNameFieldProps {
  colorName: string
}

const ColorNameField: React.FC<ColorNameFieldProps> = ({ colorName }) => {

  return (
    <div>
      <label htmlFor="colorName">Color Name:</label>
      <input
        type="text"
        id="colorName"
        value={colorName}
        readOnly
      />
    </div>
  );
};

export default ColorNameField;