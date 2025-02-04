import { showPokemon, showPokemonDetails } from './modules/pokemon.js';
import { showError } from './modules/ui.js';
import { searchPokemonData } from './modules/api.js';

const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-btn");
const pokemonList = document.getElementById("pokemon-list");
const paginationContainer = document.querySelector(".pagination-container");
const previousBtn = document.getElementById("previous-btn");
const nextBtn = document.getElementById("next-btn");
const pokemonPerPage = 12;
let currentPage = 1;

async function loadPokemonPage(page) {
    pokemonList.innerHTML = "";
    const start  = (page - 1) * pokemonPerPage + 1;
    const end = Math.min(start + pokemonPerPage - 1, 151);

    for (let i = start; i <= end; i++) {
        try {
            const data = await searchPokemonData(i);  
            showPokemon(data, pokemonList);
        } catch (error) {
            showError("Pokémon not found");
        }
    }
}

loadPokemonPage(currentPage);

searchBtn.addEventListener("click", async function (event) {
    event.preventDefault();
    const inputValue = searchInput.value.trim();

    pokemonList.innerHTML = "";
    paginationContainer.innerHTML = "";

    if (inputValue === "") {
        showError("You must enter a Pokémon number or name");
    } else if (!isNaN(Number(inputValue)) && Number(inputValue) > 0 && Number(inputValue) <= 151) {
        try {
            const data = await searchPokemonData(inputValue);
            showPokemon(data, pokemonList);
        } catch (error) {
            showError("Pokémon not found");
        }
    } else if (/^[a-zA-Z]+$/.test(inputValue)) {
        try {
            const data = await searchPokemonData(inputValue.toLowerCase());
            showPokemon(data, pokemonList);
        } catch (error) {
            showError("Pokémon not found");
        }
    } else {
        showError("Pokémon not found");
    }
});

previousBtn.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        loadPokemonPage(currentPage);
    }
});

nextBtn.addEventListener("click", () => {
    if (currentPage < Math.ceil(151 / pokemonPerPage)) {
        currentPage++;
        loadPokemonPage(currentPage);
    }
});
