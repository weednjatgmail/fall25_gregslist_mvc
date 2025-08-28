import { CarsController } from './controllers/CarsController.js';
import { ExampleController } from './controllers/ExampleController.js';
import { HouseController } from './controllers/HouseController.js';

class App {
  carsController = new CarsController()
  housesController = new HouseController()
}

window['app'] = new App()


