export function getRandomColor(): { r: number; g: number; b: number } {
  const getRandomValue = () => Math.floor(Math.random() * 256);
  return {
    r: getRandomValue(),
    g: getRandomValue(),
    b: getRandomValue(),
  };
}
