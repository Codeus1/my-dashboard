import React from 'react'
import { SimplePokemon } from '../interfaces/simple-pokemon'
import { PokemonCard } from './PokemonCard'


type Props = {
    pokemons: SimplePokemon[]
}

export const  PokemonGrid =  ({pokemons}: Props) => {
  return (
    // <div className='flex'>
    <div 
    className="flex flex-wrap gap-10 items-center justify-center">
       
       
       
        {
            pokemons.map(pokemon => (
            // <h1 key={pokemon.id}>hola</h1>
            
            <PokemonCard key={pokemon.id} pokemon={pokemon}/>
            ))
        } 
        
         
        
      {/* ))
      } */}
    </div>
  )
}