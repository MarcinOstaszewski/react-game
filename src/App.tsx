import { useEffect, useState } from 'react';
import './App.css';
import { Color } from './types/types';
import { useDebounce } from './hooks/useDebounce';
import CharacterSettingsForm from './components/CharacterSettingsForm';
import fetchColorName from './helpers/fetchColorName';
import GameBoardContainer from './components/GameBoardContainer';
import { getRandomColor } from './helpers/getRandomColor';

function App() {
  const [name, setName] = useState('Player 1');
  const [color, setColor] = useState(getRandomColor() as Color);
  const [colorName, setColorName] = useState('');
  const debouncedFetch = useDebounce(color);

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setColor(prevColor => ({
      ...prevColor,
      [name]: Number(value)
    }));
  };

  useEffect(() => {
    const fetchColorData = async () => {
      const colorName = await fetchColorName(debouncedFetch);
      if (colorName) {
        setColorName(colorName);
      }
    }
    fetchColorData();
  }, [debouncedFetch]);

  return (
    <main className="main">
      <section className="left-section">
        <CharacterSettingsForm 
          name={name}
          color={color}
          setName={setName}
          handleColorChange={handleColorChange}
          colorName={colorName}
        />
      </section>
      <section className="right-section">
        <GameBoardContainer
          color={color}
          name={name}
        />
      </section>
    </main>
  )
}

export default App
