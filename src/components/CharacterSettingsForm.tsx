import React from 'react';
import './CharacterSettingsForm.css';
import CharacterNameField from './CharacterNameField';
import ColorNameField from './ColorNameField';
import ColorSlider from './ColorSlider';
import CurrentColorDisplay from './CurrentColorDisplay';

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
    <form className='character-form'>
      <CharacterNameField name={name} setName={setName} />
      {['r', 'g', 'b'].map((colorKey) => (
        <ColorSlider
          key={colorKey}
          colorKey={colorKey}
          color={color}
          handleColorChange={handleColorChange}
        />
      ))}
      <CurrentColorDisplay color={color} />
      <ColorNameField colorName={colorName}/>
    </form>
  );
};

export default CharacterSettingsForm;