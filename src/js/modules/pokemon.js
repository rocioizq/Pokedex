export function showPokemon(pokemon, pokemonList) {
    let pokemonTypes = pokemon.types.map(type => `<p class="type ${type.type.name}">${type.type.name.toUpperCase()}</p>`).join("");

    const divContainer = document.createElement("div");
    divContainer.classList.add("pokemon-card");
    divContainer.innerHTML = `
        <div class="pokemon-image">
            <img src="${pokemon.sprites.other.home["front_default"]}" alt="${pokemon.name}">
        </div>
        <div class="pokemon-info">
            <div class="name-container">
                <p class="pokemon-id">Nº${pokemon.id}</p>
                <h2 class="pokemon-name">${pokemon.name}</h2>
            </div>
            <div class="pokemon-types">
                ${pokemonTypes}
            </div>                 
        </div>`;

    divContainer.addEventListener("click", () => {
        showPokemonDetails(pokemon);
    });
    pokemonList.appendChild(divContainer);
}

export function showPokemonDetails(pokemon) {
    let pokemonTypes = pokemon.types.map(type => `<p class="type ${type.type.name}">${type.type.name.toUpperCase()}</p>`).join("");

    const divContainerDetails = document.createElement("div");
    divContainerDetails.classList.add("pokemon-details");
    divContainerDetails.innerHTML = `
        <button class="close-details-btn">X</button>
        <div class="pokemon-image">
            <img src="${pokemon.sprites.other.home["front_default"]}" alt="${pokemon.name}">
        </div>
        <div class="pokemon-info">
            <div class="name-container">
                <p class="pokemon-id">Nº${pokemon.id}</p>
                <h2 class="pokemon-name">${pokemon.name}</h2>
            </div>
            <div class="pokemon-types">
                ${pokemonTypes}
            </div>
            <div class="stat">
                <p class="weight">${pokemon.weight / 10} KG |</p>
                <p class="height">${pokemon.height / 10} M</p>
                <p class="species"><span>Specie: </span>${pokemon.species.name}</p>
                <p class="abilities"><span>Abilities: </span>${pokemon.abilities.map(a => a.ability.name).join(", ")}</p>
            </div>
        </div>`;

    const detailsContainer = document.getElementById("pokemon-details");
    detailsContainer.innerHTML = "";
    detailsContainer.appendChild(divContainerDetails);
    document.getElementById("pokemon-details-container").style.display = "flex";

    const closeBtn = divContainerDetails.querySelector(".close-details-btn");
    closeBtn.addEventListener("click", function() {
        document.getElementById("pokemon-details-container").style.display = "none";
    });
}
