import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";



export const metadata = {
 title: 'Favoritos',
 description: 'Pokemon Grid',
};


export default async function PokemonsPage() {
 

  return (
    <div
      className="flex flex-wrap justify-center gap-8"
      // className="flex flex-col "
    >
      <span className="text-5xl my-2">
        Listado de Pokemon Favoritos <small className="text-blue-500" >Global state </small>
      </span>
    <PokemonGrid pokemons={[]}/>
      
    </div>
  );
}
