import { appState } from "../AppState.js"
import { WildPokemon } from "../Models/WildPokemon.js"
import { poke_api } from "./AxiosService.js"

let offset = 0

class WildPokemonService {

    async getWildPokemon() {
        const res = await poke_api.get('/pokemon')
        appState.wildPokemon = res.data.results
        console.log('[wild pokemon data]', appState.wildPokemon)
    }

    async getPreviousPokemon() {
        try {
            if (offset > 0) {
                offset -= 20
            }
            const res = await poke_api.get(`/pokemon/?offset=${offset}&limit=20`)
            appState.wildPokemon = res.data.results
            // console.log(res.data.results)
        } catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }

    async getNextPokemon() {
        try {
            if (offset < 1280) {
                offset += 20
            }
            const res = await poke_api.get(`/pokemon/?offset=${offset}&limit=20`)
            appState.wildPokemon = res.data.results
            // console.log(res.data.results)
        } catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }

    async getWildPokemonByName(name) {
        const res = await poke_api.get('/pokemon/' + name)
        appState.foundWildPokemon = new WildPokemon(res.data)
        // console.log('[current pokemon]', appState.foundWildPokemon)
    }

}

export const wildPokemonService = new WildPokemonService()
