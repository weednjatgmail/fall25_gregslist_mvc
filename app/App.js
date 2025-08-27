import { CarsController } from './controllers/CarsController.js';
import { ExampleController } from './controllers/ExampleController.js';

class App {
  carsController = new CarsController()
}

window['app'] = new App()


