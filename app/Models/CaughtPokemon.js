

export class CaughtPokemon {
    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.img = data.img
        this.hp = data.hp || ''
        this.dmg = data.dmg || ''
        this.height = data.height
        this.weight = data.weight
    }
    
    get ObservedCaughtPokemonTemplate() {
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
              <button class="btn btn-outline-danger" 
              onclick="app.caughtPokemonController.removePokemon()">Remove From Pokedex</button>
            </div>
          </div>
          `
    }

    static CaughtPokemonButtonTemplate(caughtPokemon) {
        return /*html*/ `
        <button class="btn btn-outline-dark mb-2 w-100" 
        onclick="app.caughtPokemonController.getCaughtPokemonById('${caughtPokemon.id}')">${caughtPokemon.name}</button>
        `
    }

}