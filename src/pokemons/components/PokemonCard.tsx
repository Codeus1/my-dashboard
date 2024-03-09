import Link from "next/link";
import React from "react";
import { SimplePokemon } from "..";
import Image from "next/image";
import { IoHeartOutline } from "react-icons/io5";

interface Props {
  pokemon: SimplePokemon;
}
const generateOfficialArtworkdUrl = (id: string) => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
};

export const PokemonCard = ({ pokemon }: Props) => {
  const { id, name } = pokemon;

  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="flex flex-col  bg-white rounded overflow-hidden shadow-lg">
        <div className="flex flex-col justify-center items-center text-center p-6 bg-gray-800 border-b">
          <Image
            key={pokemon.id}
            width={128}
            height={128}
            alt={pokemon.name}
            src={generateOfficialArtworkdUrl(pokemon.id)}
            priority={false} 
          />
          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize"> {name} </p>

          <div className="mt-5">
            <Link href={`/dashboard/pokemons/${name}`} className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100">
              Mas información
            </Link>
          </div>
        </div>
        <div className="border-b">
          <Link
            className="px-4 py-2 hover:bg-gray-100 flex items-center"
            href="/dashboard/main"
          >
            <div className="text-red-600">
              <IoHeartOutline />
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                No es favorito
              </p>
              
            </div>
          </Link>
          
        </div>

        
      </div>
    </div>
  );
};
