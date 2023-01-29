import { Link, LoaderFunction, Outlet, useLoaderData } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";
import { PokemonList } from "../types/pokemon";

export const loader: LoaderFunction = () => {
  return fetch(`${import.meta.env.VITE_API_URL}/pokemon`);
};

export default function Root() {
  const pokemon = useLoaderData() as PokemonList;
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <div className="p-2">
      <div className="flex">
        <h1 className="flex-grow">Velotio Pokémon</h1>
        <button
          onClick={() => {
            if (isAuthenticated) {
              logout();
              return;
            }
            login();
          }}
        >
          Sign {isAuthenticated ? "out" : "in"}
        </button>
      </div>
      <div className="flex container mt-2">
        <div className="w-1/4 border-r-2 p-3 flex flex-col">
          <h2>Pokélist</h2>
          {pokemon?.results?.map((currentPokemon) => (
            <Link
              to={`pokemon/${currentPokemon.name}`}
              className="mt-2 capitalize"
              key={`pokeomon/${currentPokemon.name}`}
            >
              {currentPokemon.name}
            </Link>
          ))}
        </div>
        <div className="w-3/4 p-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
