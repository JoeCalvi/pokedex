import { appState } from "../AppState.js"
import { WildPokemon } from "../Models/WildPokemon.js"
import { poke_api } from "./AxiosService.js"

class WildPokemonService {

    async getWildPokemon() {
        const res = await poke_api.get('/pokemon')
        appState.wildPokemon.push(res.data.results)
        console.log('[wild pokemon data]', appState.wildPokemon)

        // NOTE res.data.next to access next page of pokemon
    }

}

export const wildPokemonService = new WildPokemonService()
