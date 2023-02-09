

export class CaughtPokemon {
    constructor(data) {
        this.name = data.name
        this.img = data.img
        this.hp = data.hp || ''
        this.dmg = data.dmg || ''
        this.height = data.height
        this.weight = data.weight
    }
}