const urlApi = "https://pokeapi.co/api/v2/pokemon/";

export async function searchPokemonData(inputValue) {
    const url = isNaN(inputValue) ? `${urlApi}${inputValue.toLowerCase()}` : `${urlApi}${inputValue}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch {
        throw new Error("Pokémon not found");
    }
}
