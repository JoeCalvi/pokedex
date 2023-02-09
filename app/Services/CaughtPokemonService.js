import { appState } from "../AppState.js"
import { CaughtPokemon } from "../Models/CaughtPokemon.js"
import { sandbox_api } from "./AxiosService.js"

class CaughtPokemonService {

    async getCaughtPokemon() {
        const res = await sandbox_api.get('/pokemon')
        console.log('[caught pokemon data]', res.data)
    }

    async catchPokemon() {
        const res = await sandbox_api.post('/pokemon', appState.foundWildPokemon)
        let newPokemon = new CaughtPokemon(res.data)
        appState.caughtPokemon.push(newPokemon)
        appState.emit('caughtPokemon')
        appState.observedCaughtPokemon = newPokemon
        console.log('[caught pokemon]', appState.caughtPokemon)
    }

}

export const caughtPokemonService = new CaughtPokemonService()