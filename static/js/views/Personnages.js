import PokeProvider from "../services/PokeProvider.js";


export default class Personnages {
  
  async render() {
    let characters = await PokeProvider.fetchCharacters();
    console.log(characters)
    let view = 
    `
         <section class="section">
                <h1>Pokedex</h1>
                <ul class="personnage">
                  
                </ul>
            </section>
        `;
    return view;
  }
}
