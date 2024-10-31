import { useEffect, useState } from "react";
import { gameBoardSize } from "../constants/constants";

export const useArrowPressed = (playerPosition: number) => {
  const [playerIndex, setPlayerIndex] = useState(playerPosition);

  const handleKeyDown = (event: KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowUp':
        setPlayerIndex((prevIndex) => prevIndex - gameBoardSize);
        break;
      case 'ArrowDown':
        setPlayerIndex((prevIndex) => prevIndex + gameBoardSize);
        break;
      case 'ArrowLeft':
        setPlayerIndex((prevIndex) => prevIndex - 1);
        break;
      case 'ArrowRight':
        setPlayerIndex((prevIndex) => prevIndex + 1);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return playerIndex;
};