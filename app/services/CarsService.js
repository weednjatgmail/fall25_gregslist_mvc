import { AppState } from "../AppState.js";
import { Car } from "../models/Car.js";

class CarsService {
  createCar(data) {
    console.log('data in the service', data);
    const newCar = new Car(data) // converts raw data to class object
    AppState.cars.push(newCar)
    console.log('cars after adding new car', AppState.cars);
  }
}

export const carsService = new CarsService() // singleton