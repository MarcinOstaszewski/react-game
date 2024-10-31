import React from 'react';
import './CharacterSettingsForm.css';
import CharacterNameField from './CharacterNameField';

type CharacterSettingsFormProps = {
  name: string;
  color: { r: number; g: number; b: number };
  setName: React.Dispatch<React.SetStateAction<string>>;
  handleColorChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CharacterSettingsForm: React.FC<CharacterSettingsFormProps> = ({
  name,
  color,
  setName,
  handleColorChange
}) => {

  return (
    <form>
      <CharacterNameField name={name} setName={setName} />

      {['r', 'g', 'b'].map((colorKey) => (
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
      ))}
      <div>
        <label htmlFor="current-color">Current color:</label>
        <div
          className="current-color"
          style={{
            backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})`
          }}
        ></div>
      </div>
      <div>
        <label htmlFor="colorName">Color Name:</label>
        <input
          type="text"
          id="colorName"
          value={''} // Leave it empty for now
          readOnly
        />
      </div>
    </form>
  );
};

export default CharacterSettingsForm;