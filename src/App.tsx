import { useEffect, useState } from 'react';
import './App.css';
import { Color } from './types/types';
import { useDebounce } from './hooks/useDebounce';
import { createGameBoard } from './helpers/createGameBoard';
import CharacterSettingsForm from './components/CharacterSettingsForm';
import fetchColorName from './helpers/fetchColorName';
import GameBoard from './components/GameBoard';

function App() {
  const [name, setName] = useState('Player 1');
  const [color, setColor] = useState({ r: 255, g: 255, b: 255 } as Color);
  const [colorName, setColorName] = useState('');
  const [squares, setSquares] = useState<null[]>([]);
  const [playerPosition, setPlayerPosition] = useState(0);
  const [firePositions, setFirePositions] = useState(new Set<number>());
  const debouncedFetch = useDebounce(color);

  useEffect(() => {
    const { squares, playerPosition, firePositions } = createGameBoard(12);
    setSquares(squares);
    setPlayerPosition(playerPosition);
    setFirePositions(firePositions);
  }, []);

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
        <GameBoard
          color={color}
          name={name}
          squares={squares}
          playerPosition={playerPosition}
          firePositions={firePositions}
        />
      </section>
    </main>
  )
}

export default App
