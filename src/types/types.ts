
export type RootStackParamList = {
    AllPokemon: undefined;
    Detail: { name: string; url: string };
  };

export type PokemonInListType = {
    name: string;
    url: string;
}

export type PokemonSprites = {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
  };

export type PokemonDetail = {
    name?: string;
    id?: number;
    height?: number;
    weight?: number;
    sprites?: PokemonSprites;
    types?: any[]; 
}