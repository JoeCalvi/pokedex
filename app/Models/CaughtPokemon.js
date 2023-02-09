

export class CaughtPokemon {
    constructor(data) {
        this.name = data.name
        this.img = data.img
        this.hp = data.hp || ''
        this.dmg = data.dmg || ''
        this.height = data.height
        this.weight = data.weight
    }

    static CaughtPokemonButtonTemplate(caughtPokemon) {
        return /*html*/ `
        <button class="btn btn-outline-dark mb-2 w-100" 
        onclick="app.caughtPokemonController.getCaughtPokemonByName('${caughtPokemon.name}')">${caughtPokemon.name}</button>
        `
    }
}