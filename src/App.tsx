import { useEffect, useState } from 'react';
import CharacterSettingsForm from './components/CharacterSettingsForm';
import fetchColorName from './helpers/fetchColorName';
import { useDebounce } from './hooks/useDebounce';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [color, setColor] = useState({ r: 0, g: 0, b: 0 });
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
        right
      </section>
    </main>
  )
}

export default App
