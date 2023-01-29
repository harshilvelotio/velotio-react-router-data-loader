export type PokemonList = { results: Array<{ name: string }> };

export interface Pokemon {
  name: string;
  height: number;
  weight: number;
  moves: PokemonMove[];
  types: PokemonType[];
  sprites: {
    front_default: string;
  };
}

export interface PokemonMove {
  move: {
    name: string;
  };
}

export interface PokemonType {
  type: {
    name: string;
  };
}
