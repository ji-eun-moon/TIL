import axios from "axios"

const URL = `http://pokeapi.co/api/v2/pokemon?limit=151`

export const getAllPokemonList = async() => {
    const{data} = await axios.get(URL);
    return data
}