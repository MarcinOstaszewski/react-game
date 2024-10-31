import React from 'react';

interface CharacterNameFieldProps {
  name: string;
  setName: (name: string) => void;
}

const CharacterNameField: React.FC<CharacterNameFieldProps> = ({ name, setName }) => {
  return (
    <div>
      <label htmlFor="name">Character name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default CharacterNameField;