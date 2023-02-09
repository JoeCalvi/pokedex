import { wildPokemonService } from "../Services/WildPokemonService.js";
import { appState } from "../AppState.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";
import { WildPokemon } from "../Models/WildPokemon.js";


function _drawFoundWildPokemon() {
    setHTML('observed-pokemon', appState.foundWildPokemon.FoundWildPokemonTemplate)
}

function _drawWildPokemon() {
    let template = ''
    appState.wildPokemon.forEach(p => template += WildPokemon.WildPokemonButtonTemplate(p))
    setHTML('wild-pokemon', template)
}


export class WildPokemonController {
    constructor() {
        // console.log('[wild pokemon wired up]')
        this.getWildPokemon()
        _drawWildPokemon()
        appState.on('wildPokemon', _drawWildPokemon)
        appState.on('foundWildPokemon', _drawFoundWildPokemon)
    }

    async getWildPokemon() {
        try {
            await wildPokemonService.getWildPokemon()
        } catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }

    async getWildPokemonByName(name) {
        try {
            await wildPokemonService.getWildPokemonByName(name)
        } catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }
}