import { gameBoardSize } from "../constants/constants";

export const handleKeyDown = (event: KeyboardEvent, setPlayerPosition: React.Dispatch<React.SetStateAction<number>>) => {
  switch (event.key) {
    case 'ArrowUp':
      setPlayerPosition((prevIndex) => {
        return (prevIndex < gameBoardSize) ? prevIndex : prevIndex - gameBoardSize;
      });
      break;
    case 'ArrowDown':
      setPlayerPosition((prevIndex) => {
        return prevIndex >= (gameBoardSize * (gameBoardSize - 1)) ? prevIndex : prevIndex + gameBoardSize;
      });
      break;
    case 'ArrowLeft':
      setPlayerPosition((prevIndex) => {
        return (prevIndex % gameBoardSize === 0) ? prevIndex : prevIndex - 1;
      });
      break;
    case 'ArrowRight':
      setPlayerPosition((prevIndex) => {
        return ((prevIndex + 1) % gameBoardSize === 0) ? prevIndex : prevIndex + 1;
      });
      break;
    default:
      break;
  }
};