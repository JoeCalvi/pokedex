import { appState } from "../AppState.js"
import { CaughtPokemon } from "../Models/CaughtPokemon.js"
import { Pop } from "../Utils/Pop.js"
import { sandbox_api } from "./AxiosService.js"

class CaughtPokemonService {

    async getCaughtPokemon() {
        const res = await sandbox_api.get('/pokemon')
        appState.caughtPokemon = res.data
        // console.log('[caught pokemon data]', appState.caughtPokemon)
    }

    async getCaughtPokemonById(id) {
        const res = await sandbox_api.get('pokemon/' + id)
        appState.observedCaughtPokemon = res.data
        // console.log(appState.observedCaughtPokemon)
    }

    async catchPokemon() {
        let userRoll = (Math.random() * 100)
        let pokeRoll = (Math.random() * 100)
        if (userRoll > pokeRoll) {
            const res = await sandbox_api.post('/pokemon', appState.foundWildPokemon)
            let newPokemon = new CaughtPokemon(res.data)
            let myPokemon = appState.caughtPokemon
            myPokemon.push(newPokemon)
            appState.emit('caughtPokemon')
            appState.observedCaughtPokemon = newPokemon
            Pop.toast(`You caught a ${myPokemon.name}!`, 'success', 'center', 3000, true)
            console.log('[user roll]', userRoll, '[poke roll]', pokeRoll)
        } else {
            Pop.toast(`${appState.foundWildPokemon.name} resisted your attempt!`, 'error', 'center', 3000, true)
            console.log('[user roll]', userRoll, '[poke roll]', pokeRoll)
        }
    }

    async removePokemon(pokemonId) {
        const res = await sandbox_api.delete('/pokemon/' + pokemonId)
        let oldPokeIndex = appState.caughtPokemon.findIndex(p => p.id == pokemonId)
        appState.caughtPokemon.splice(oldPokeIndex, 1)
        appState.emit('caughtPokemon')
        // console.log(appState.caughtPokemon)
    }

}

export const caughtPokemonService = new CaughtPokemonService()