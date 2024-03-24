const ALL_POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon'; 

export const getAllPokemon = async (url: string = ALL_POKEMON_URL, limit: number = 151): Promise<any[]> => {
  try {
    const response = await fetch(`${url}?limit=${limit}`);
    
    if (!response.ok) {
      throw new Error('Could not fetch data');
    }
    
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('There was a problem with your fetch operation:', error);
    return [];
  }
};

export const getPokemonDetail = async (url: string): Promise<any> => {
    try{
        const response = await fetch(url);
    if(!response.ok){
        throw new Error('Could not fetch data');
    }
    const data = await response.json();
    return data;
    } catch(error) {
        console.error('There was a problem with your fetch operation:', error);
        return {error}
    }
}