import { useState } from 'react';
import CharacterSettingsForm from './components/CharacterSettingsForm';
import './App.css';

function App() {

  const [name, setName] = useState('');
  const [color, setColor] = useState({ r: 0, g: 0, b: 0 });

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setColor(prevColor => ({
      ...prevColor,
      [name]: Number(value)
    }));
  };

  return (
    <main className="main">
      <section className="left-section">
        <CharacterSettingsForm 
          name={name}
          color={color}
          setName={setName}
          handleColorChange={handleColorChange}
        />
      </section>
      <section className="right-section">
        right
      </section>
    </main>
  )
}

export default App
