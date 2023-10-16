import { useState } from "react";
import { useFetch } from "./useFetch";
import { useEffect } from "react";


export const usePokemon = () => {

    const { hasError , isLoading , data } = useFetch('https://pokeapi.co/api/v2/pokemon?limit=1500');
    const [pokemonReady, setpokemonReady] = useState(false);
    const [pokemon, setpokemon] = useState();
 
 
   const transforSmallURL = (smallUrl) => {
 
     const pokemonArr = smallUrl.map( poke => {
 
         const pokemon = poke.url.split('/')
         const id = pokemon[6];
         const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
  
         return {
             id,
             name:poke.name,
             picture,
         }
     })
 
     setpokemon(pokemonArr);
     console.log(pokemon)
   }
 
   useEffect(() => {
    if (!isLoading) {
        const smallUrl = data.results;
        transforSmallURL(smallUrl)
        setpokemonReady(true)
      }
   }, [isLoading])
   
         
  

      return { 
        pokemon,
        pokemonReady,
      }


}
