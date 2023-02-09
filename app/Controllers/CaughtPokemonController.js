import { caughtPokemonService } from "../Services/CaughtPokemonService.js";
import { appState } from "../AppState.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";
import { CaughtPokemon } from "../Models/CaughtPokemon.js";


function _drawCaughtPokemon() {
    let template = ''
    appState.caughtPokemon.forEach(p => template += CaughtPokemon.CaughtPokemonButtonTemplate(p))
    setHTML('caught-pokemon', template)
}

export class CaughtPokemonController {
    constructor() {
        // console.log('[caught pokemon wired up]')
        this.getCaughtPokemon()
        _drawCaughtPokemon()
        appState.on('caughtPokemon', _drawCaughtPokemon)
        console.log(appState.caughtPokemon)
    }

    async getCaughtPokemon() {
        try {
            await caughtPokemonService.getCaughtPokemon()
        } catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }

    async catchPokemon() {
        try {
            await caughtPokemonService.catchPokemon()
        } catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }

    show() {
        _drawCaughtPokemon()
    }
}