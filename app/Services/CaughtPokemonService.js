import { appState } from "../AppState.js"
import { CaughtPokemon } from "../Models/CaughtPokemon.js"
import { Pop } from "../Utils/Pop.js"
import { sandbox_api } from "./AxiosService.js"

class CaughtPokemonService {

    async getCaughtPokemon() {
        const res = await sandbox_api.get('/pokemon')
        appState.caughtPokemon = res.data
        console.log('[caught pokemon data]', appState.caughtPokemon)
    }

    async getCaughtPokemonById(id) {
        const res = await sandbox_api.get('pokemon/' + id)
        appState.observedCaughtPokemon = res.data
        console.log(appState.observedCaughtPokemon)
    }

    async catchPokemon() {
        let roll = (Math.random() * 100)
        if (roll >= 70) {
            const res = await sandbox_api.post('/pokemon', appState.foundWildPokemon)
            let newPokemon = new CaughtPokemon(res.data)
            let myPokemon = appState.caughtPokemon
            myPokemon.push(newPokemon)
            appState.emit('caughtPokemon')
            appState.observedCaughtPokemon = newPokemon
            console.log(roll, '[caught pokemon]', appState.caughtPokemon)
        } else {
            Pop.toast(`${appState.foundWildPokemon.name} resisted your attempt!`)
            console.log(roll)
        }
    }

    async removePokemon(pokemonId) {
        const res = await sandbox_api.delete('/pokemon/' + pokemonId)
        let oldPokeIndex = appState.caughtPokemon.findIndex(p => p.id == pokemonId)
        appState.caughtPokemon.splice(oldPokeIndex, 1)
        appState.emit('caughtPokemon')
        console.log(appState.caughtPokemon)
    }

}

export const caughtPokemonService = new CaughtPokemonService()