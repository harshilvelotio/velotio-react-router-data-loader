import React from "react";
import { LoaderFunction, useLoaderData } from "react-router-dom";
import { Pokemon } from "../types/pokemon";

export const loader: LoaderFunction = ({ params }) => {
  return fetch(`${import.meta.env.VITE_API_URL}/pokemon/${params.id}`);
};

export default function PokemonDetails() {
  const pokemonDetails = useLoaderData() as Pokemon;

  return (
    <div className="container flex flex-col">
      <div className="flex items-center">
        <img className="mr-2" src={pokemonDetails?.sprites?.front_default} />
        <h2 className="capitalize text-2xl font-bold">{pokemonDetails.name}</h2>
      </div>
      <div className="flex flex-col">
        <div className="max-w-xs rounded overflow-hidden shadow-lg p-2 bg-gray-700">
          <div className="text-lg font-semibold">Height</div>
          <div>{pokemonDetails?.height}</div>
        </div>
        <div className="max-w-xs rounded overflow-hidden shadow-lg p-2 mt-4 bg-gray-700">
          <div className="text-lg font-semibold">Weight</div>
          <div>{pokemonDetails?.weight}</div>
        </div>
        <div className="max-w-xs rounded overflow-hidden shadow-lg p-2 mt-4 bg-gray-700">
          <div className="text-lg font-semibold">Types</div>
          <div>
            {pokemonDetails?.types?.map((type) => type?.type?.name).join(", ")}
          </div>
        </div>
        <div className="max-w-xs rounded overflow-hidden shadow-lg p-2 mt-4 bg-gray-700">
          <div className="text-lg font-semibold">Moves</div>
          <div>
            {pokemonDetails?.moves?.map((move) => move?.move?.name).join(", ")}
          </div>
        </div>
      </div>
    </div>
  );
}
