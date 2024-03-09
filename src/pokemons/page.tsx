// import { SimplePokemon } from "./interfaces/simple-pokemon";
// import { PokemonsResponse } from "./interfaces/pokemons-response";
// import Image from "next/image";
// import { PokemonGrid } from ".";

// const getPokemons = async (
//   limit = 20,
//   offset = 0
// ): Promise<SimplePokemon[]> => {
//   const data: PokemonsResponse = await fetch(
//     `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
//   ).then(async (res) => {
//     return await res.json();
//   });

//   const pokemons = data.results.map((pokemon) => ({
//     //coge el penultimo elemento del array despues de hacer el split, porque el ultimo es cadena vacia
//     id: pokemon.url.split("/").at(-2)!,
//     name: pokemon.name,
//   }));
//   // throw new Error('No se pudieron caragar')
//   return pokemons;
// };


// export default async function PokemonsPage() {
//   const pokemons = await getPokemons(151, 0);

//   return (
//     <div
//       className="flex flex-wrap justify-center gap-8"
//       // className="flex flex-col "
//     >
//       <span className="text-5xl my-2">
//         Listado de Pokemon <small>Estático </small>
//       </span>
//     <PokemonGrid pokemons={pokemons}/>
      
//     </div>
//   );
// }
