import React from 'react';
import './CharacterSettingsForm.css';
import CharacterNameField from './CharacterNameField';
import ColorNameField from './ColorNameField';
import ColorSlider from './ColorSlider';

type CharacterSettingsFormProps = {
  name: string;
  color: { r: number; g: number; b: number };
  setName: React.Dispatch<React.SetStateAction<string>>;
  handleColorChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  colorName: string;
};

const CharacterSettingsForm: React.FC<CharacterSettingsFormProps> = ({
  name,
  color,
  setName,
  handleColorChange,
  colorName,
}) => {

  return (
    <form>
      <CharacterNameField name={name} setName={setName} />

      {['r', 'g', 'b'].map((colorKey) => (
        <ColorSlider
          key={colorKey}
          colorKey={colorKey}
          color={color}
          handleColorChange={handleColorChange}
        />
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
      <ColorNameField colorName={colorName}/>
    </form>
  );
};

export default CharacterSettingsForm;