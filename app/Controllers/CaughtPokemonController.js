import { caughtPokemonService } from "../Services/CaughtPokemonService.js";
import { appState } from "../AppState.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

export class CaughtPokemonController {
    constructor(){
        // console.log('[caught pokemon wired up]')
        this.getCaughtPokemon()
    }

    async getCaughtPokemon(){
        try {
            await caughtPokemonService.getCaughtPokemon()
        } catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }

    async catchPokemon(){
        try {
            await caughtPokemonService.catchPokemon()
        } catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }
}