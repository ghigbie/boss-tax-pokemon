import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { getAllPokemon } from '../api_services/get_services';
import { PokemonInListType } from '../types/types';

type AppContextType = {
  allPokemon: PokemonInListType[];
  setAllPokemon: (value: []) => void;
}

interface AppContextProps {
  children: ReactNode;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const AppContextProvider = ({ children }: AppContextProps) => {
  const [allPokemon, setAllPokemon] = useState<PokemonInListType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pokemonData = await getAllPokemon();
        setAllPokemon(pokemonData);
      } catch (error) {
        console.error('Error fetching Pokemon data in context:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ allPokemon, setAllPokemon }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider


export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('Context must be used within an AppProvider');
  }
  return context;
};
