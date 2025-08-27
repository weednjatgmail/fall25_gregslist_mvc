import { AppState } from "../AppState.js";
import { Car } from "../models/Car.js";
import { loadState, saveState } from "../utils/Store.js";

class CarsService {
  deleteCar(carId) {
    const carIndex = AppState.cars.findIndex(car => car.id == carId)

    console.log('index', carIndex);

    // NOTE always try to delete something from the middle of an array when testing!

    AppState.cars.splice(carIndex, 1) // triggers observer 👷‍♂️!

    this.saveCars() // updates local storage 💾 
  }
  createCar(data) {
    console.log('data in the service', data);
    const newCar = new Car(data) // converts raw data to class object

    // NOTE push will add an element to the end of an array. unshift will add an element t0 the beginning of an array
    AppState.cars.push(newCar) // triggers observer 👷‍♂️!

    console.log('cars after adding new car', AppState.cars);

    this.saveCars() // updates local storage 💾 
  }

  // NOTE local storage should only be added after testing things thoroughly
  saveCars() {
    // utility function to store data in local storage as JSON.
    // 1st argument ('cars') is *where* we are storing something in local storage  
    // 2nd argument (AppState.cars) is *what* we are storing in local storage 
    saveState('cars', AppState.cars)
  }

  loadCars() {
    // utility function to load data from local storage and parse from JSON.
    // 1st argument ('cars') is *where* we are pulling something out of local storage  
    // 2nd argument ([Car]) is *what* we are converting the data from local storage into (an array of Car objects) 
    AppState.cars = loadState('cars', [Car])
  }
}

export const carsService = new CarsService() // singleton