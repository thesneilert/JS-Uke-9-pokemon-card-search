const app = document.getElementById("app");
let pokemonWithNameAndCardImage = "";
let lastSearchInputText = "";

updateView();

function updateView() {
  app.innerHTML = /*html*/`
    <input type="text" id="searchInput" onchange="showCard()" value="${lastSearchInputText}"></input>
    <button onclick="showCard()">Søk</button>
    ${pokemonWithNameAndCardImage}
  `;
}

function showCard() {
  const searchInput = document.getElementById("searchInput").value.toLowerCase();
  lastSearchInputText = searchInput; // save last search query
  const filteredPokemon = pokemon.data.filter((pokemonName) =>
    pokemonName.name.toLowerCase().includes(searchInput)
  );
  pokemonWithNameAndCardImage = filteredPokemon
    .map((pokemonName) => {
      return /*html*/`
        <div>
          <br>
          ${pokemonName.name}<br> 
          ${pokemonName.set.name}<br>
          <img src="${pokemonName.images.small}" alt="${pokemonName.name}"/>
        </div>
      `;
    })
    .join("");
  updateView();
}
