import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";



export const metadata = {
 title: 'Lista Pokemon',
 description: '151 Pokemon Grid',
};

const getPokemons = async( limit = 20, offset= 0 ):Promise<SimplePokemon[]> => {
  const data:PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${ offset }`)
    .then( res => res.json() );

    const pokemons = data.results.map( pokemon => ({
      id: pokemon.url.split('/').at(-2)!,
      name: pokemon.name,
    }));

    // throw new Error('Esto es un error que no debería de suceder');
    // throw notFound();

    return pokemons;
}


export default async function PokemonsPage() {
  const pokemons = await getPokemons(151, 0);

  return (
    <div
      className="flex flex-wrap justify-center gap-8"
      // className="flex flex-col "
    >
      <span className="text-5xl my-2">
        Listado de Pokemon <small className="text-blue-500" >Estático </small>
      </span>
    <PokemonGrid pokemons={pokemons}/>
      
    </div>
  );
}
