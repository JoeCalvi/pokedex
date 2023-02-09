import { appState } from "../AppState.js"
import { CaughtPokemon } from "../Models/CaughtPokemon.js"
import { Pop } from "../Utils/Pop.js"
import { sandbox_api } from "./AxiosService.js"

class CaughtPokemonService {

    async getCaughtPokemon() {
        const res = await sandbox_api.get('/pokemon')
        console.log('[caught pokemon data]', res.data)
    }

    async catchPokemon() {
        let roll = (Math.random() * 100)
        if (roll >= 70) {
            const res = await sandbox_api.post('/pokemon', appState.foundWildPokemon)
            let newPokemon = new CaughtPokemon(res.data)
            appState.caughtPokemon.push(newPokemon)
            appState.emit('caughtPokemon')
            appState.observedCaughtPokemon = newPokemon
            console.log(roll, '[caught pokemon]', appState.caughtPokemon)
        } else {
            Pop.toast(`${appState.foundWildPokemon.name} resisted your attempt!`)
            console.log(roll)
        }
    }

}

export const caughtPokemonService = new CaughtPokemonService()