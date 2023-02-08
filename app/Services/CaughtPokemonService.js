import { appState } from "../AppState.js"
import { CaughtPokemon } from "../Models/CaughtPokemon.js"
import { sandbox_api } from "./AxiosService.js"

class CaughtPokemonService {

    async getCaughtPokemon() {
        const res = await sandbox_api.get('/pokemon')
        console.log('[caught pokemon data]', res.data)
    }

}

export const caughtPokemonService = new CaughtPokemonService()