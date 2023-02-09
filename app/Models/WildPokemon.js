

export class WildPokemon {
    constructor(data) {
        this.name = data.name
        this.img = data.sprites.other['official-artwork'].front_default
        this.hp = data.stats[0].base_stat
        this.dmg = data.stats[1].base_stat
        this.height = data.height
        this.weight = data.weight
    }


    get FoundWildPokemonTemplate() {
        return /*html*/ `
        <div class="row justify-content-center">
            <div class="col-6 my-2 p-2 text-center border border-light rounded glass-card">
              <h5>Name: ${this.name}</h5>
            </div>
          </div>
          <img class="pokemon-img"
            src="${this.img}"
            alt="">
          <div class="row border border-light rounded p-3 glass-card">
            <div class="col-6 d-flex align-items-center justify-content-start">
              <h6>HP: ${this.hp}</h6>
            </div>
            <div class="col-6 d-flex align-items-center justify-content-end">
              <h6>Weight: ${this.weight}</h6>
            </div>
            <div class="col-6 d-flex align-items-center justify-content-start">
              <h6>Damage: ${this.dmg}</h6>
            </div>
            <div class="col-6 d-flex align-items-center justify-content-end">
              <h6>Height: ${this.height}</h6>
            </div>
            <div>
              <button class="btn btn-outline-light" 
              onclick="app.caughtPokemonController.catchPokemon()">Catch?</button>
            </div>
          </div>
          `
    }

    static WildPokemonButtonTemplate(wildPokemon) {
        return /*html*/ `
        <button class="btn btn-outline-dark mb-2 w-100" 
        onclick="app.wildPokemonController.getWildPokemonByName('${wildPokemon.name}')">${wildPokemon.name}</button>
        `
    }

}