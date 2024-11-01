import { gameBoardSize } from "../constants/constants";

export const handleKeyDown = (event: KeyboardEvent, setPlayerPosition: React.Dispatch<React.SetStateAction<number>>) => {
  switch (event.key) {
    case 'ArrowUp':
      setPlayerPosition((prevIndex) => prevIndex - gameBoardSize);
      break;
    case 'ArrowDown':
      setPlayerPosition((prevIndex) => prevIndex + gameBoardSize);
      break;
    case 'ArrowLeft':
      setPlayerPosition((prevIndex) => prevIndex - 1);
      break;
    case 'ArrowRight':
      setPlayerPosition((prevIndex) => prevIndex + 1);
      break;
    default:
      break;
  }
};