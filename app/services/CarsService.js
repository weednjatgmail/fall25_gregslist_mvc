import { AppState } from "../AppState.js";
import { Car } from "../models/Car.js";
import { loadState, saveState } from "../utils/Store.js";

class CarsService {
  deleteCar(carId) {
    const carIndex = AppState.cars.findIndex(car => car.id == carId)

    console.log('index', carIndex);

    // NOTE always try to delete something from the middle of an array!
    AppState.cars.splice(carIndex, 1)

    this.saveCars()
  }
  createCar(data) {
    console.log('data in the service', data);
    const newCar = new Car(data) // converts raw data to class object
    AppState.cars.push(newCar)
    console.log('cars after adding new car', AppState.cars);

    this.saveCars()
  }

  // NOTE local storage should only be added after testing things thoroughly
  saveCars() {
    saveState('cars', AppState.cars)
  }

  loadCars() {
    AppState.cars = loadState('cars', [Car])
  }
}

export const carsService = new CarsService() // singleton