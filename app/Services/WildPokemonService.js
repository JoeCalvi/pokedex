import { appState } from "../AppState.js"
import { WildPokemon } from "../Models/WildPokemon.js"
import { poke_api } from "./AxiosService.js"

class WildPokemonService {

    async getWildPokemon() {
        const res = await poke_api.get('/pokemon')
        console.log('[wild pokemon data]', res.data.results)

        // NOTE res.data.next to access next page of pokemon
    }

}

export const wildPokemonService = new WildPokemonService()
