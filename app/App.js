import { CaughtPokemonController } from "./Controllers/CaughtPokemonController.js";
import { WildPokemonController } from "./Controllers/WildPokemonContoller.js";



class App {
  wildPokemonController = new WildPokemonController()
  caughtPokemonController = new CaughtPokemonController()
}

window["app"] = new App();
