import axios from 'axios';
import { useEffect, useState } from 'react'

const Pokemon = () => {

  const [ pokemon, setPokemon ] = useState({});
  const [ isDecimeters, setIsDecimeters] = useState(true);
  const [ isHectograms, setIsHectograms ] = useState(true);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 600) +1}`)
      .then(res => setPokemon(res.data))
  }, [])

  // console.log(pokemon);

  const changePokemon = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 600) +1}`)
      .then(res => setPokemon(res.data))
  }

  return (
    <div className='card'>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites?.other.dream_world.front_default} alt="" />
      <h3>Weight: {isHectograms ? pokemon.weight : pokemon.weight/10} {' '} 
        {isHectograms? 'hectograms' : 'kilograms'}</h3>
      <h3>Height: {" "}
        {isDecimeters ? pokemon.height : pokemon.height/10} {" "}
        {isDecimeters ? 'decimeters' : 'meters'}</h3>
      <h3>Type: {pokemon.types?.[0].type.name}</h3>
      <div className="buttons">
        <button onClick={() => setIsHectograms(!isHectograms)}><i className="fa-solid fa-scale-unbalanced-flip"></i></button>
        <button onClick={() => setIsDecimeters(!isDecimeters)}><i className="fa-solid fa-arrow-up-wide-short"></i></button>
        <button onClick={changePokemon}><i className="fa-solid fa-shuffle"></i></button>
      </div>
    </div>
  );
};

export default Pokemon;