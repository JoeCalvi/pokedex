import { caughtPokemonService } from "../Services/CaughtPokemonService.js";
import { appState } from "../AppState.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";
import { CaughtPokemon } from "../Models/CaughtPokemon.js";

function _drawObservedCaughtPokemon() {
    let observedPokemon = appState.observedCaughtPokemon
    let template = `
    <div class="row justify-content-center">
            <div class="col-6 my-2 p-2 text-center border border-light rounded glass-card">
              <h5>Name: ${observedPokemon.name}</h5>
            </div>
          </div>
          <img class="pokemon-img"
            src="${observedPokemon.img}"
            alt="">
          <div class="row border border-light rounded p-3 glass-card">
            <div class="col-12 d-flex align-items-center justify-content-evenly">
              <h6>Weight: ${observedPokemon.weight}</h6>
              <h6>Height: ${observedPokemon.height}</h6>
            </div>
            <div>
              <button class="btn btn-outline-danger" 
              onclick="app.caughtPokemonController.removePokemon('${observedPokemon.id}')">Remove From Pokedex</button>
            </div>
          </div>
    `
    setHTML('observed-pokemon', template)
}

function _drawCaughtPokemon() {
    let template = ''
    appState.caughtPokemon.forEach(p => template += CaughtPokemon.CaughtPokemonButtonTemplate(p))
    setHTML('caught-pokemon', template)
}

function _drawPokeball() {
    let template = `
    <div class="row justify-content-center">
            <div class="col-6 my-2 p-2 text-center">
              <h5>Wanna Catch 'em All?</h5>
            </div>
          </div>
          <img class="pokemon-img"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/800px-Pokebola-pokeball-png-0.png"
            alt="">
    `
    setHTML('observed-pokemon', template)
}

export class CaughtPokemonController {
    constructor() {
        // console.log('[caught pokemon wired up]')
        this.getCaughtPokemon()
        _drawCaughtPokemon()
        appState.on('caughtPokemon', _drawCaughtPokemon)
        appState.on('observedCaughtPokemon', _drawObservedCaughtPokemon)
        console.log(appState.caughtPokemon)
    }

    async getCaughtPokemon() {
        try {
            await caughtPokemonService.getCaughtPokemon()
        } catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }

    async getCaughtPokemonById(id) {
        try {
            await caughtPokemonService.getCaughtPokemonById(id)
        } catch (error) {
            console.error(error)
            Pop.error(error)
        }

    }

    async catchPokemon() {
        try {
            await caughtPokemonService.catchPokemon()
        } catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }

    async removePokemon(pokemonId) {
        try {
            if (await Pop.confirm('Are you sure you want to remove this Pokemon?')) {
                await caughtPokemonService.removePokemon(pokemonId)
                _drawPokeball()
            }
        } catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }

    show() {
        _drawCaughtPokemon()
    }
}