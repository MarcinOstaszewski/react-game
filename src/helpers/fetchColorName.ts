async function fetchColorName({r, g, b}: {r: number, g: number, b: number}) {
  
  try {
    const response = await fetch(`https://www.thecolorapi.com/id?rgb=${r},${g},${b}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.name.value;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}

export default fetchColorName;