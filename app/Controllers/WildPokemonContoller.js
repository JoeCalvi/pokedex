import { wildPokemonService } from "../Services/WildPokemonService.js";
import { appState } from "../AppState.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";


function _drawFoundWildPokemon(){
let template = ''

}


export class WildPokemonController {
    constructor(){
        // console.log('[wild pokemon wired up]')
        this.getWildPokemon()
    }

    async getWildPokemon(){
        try {
            await wildPokemonService.getWildPokemon()
        } catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }
}