import { AppState } from "../AppState.js";
import { carsService } from "../services/CarsService.js";
import { getFormData } from "../utils/FormHandler.js";

export class CarsController {
  constructor() {
    console.log('CARS CONTROLLER IS LOADED 🚓🚗🚙');
    AppState.on('cars', this.drawCarListings) // 👷‍♂️ --> AppState.cars ; 👷‍♂️drawCarListings()

    this.drawCarListings()
  }

  drawCarListings() {
    console.log('drawing cars!')
    let listingContent = ''
    AppState.cars.forEach(car => {
      listingContent += car.listingTemplate
    })
    const carListingElem = document.getElementById('car-listings')
    carListingElem.innerHTML = listingContent
  }

  submitCar() {
    event.preventDefault() // stops page from refreshing
    const formThatSubmitted = event.target // grabs the form html element

    // NOTE ts-ignore will ignore error squiggles in your code (MAKE SURE YOU TEST THAT CODE BEFORE IGNORING)
    // @ts-ignore
    console.log('the car make', formThatSubmitted.make.value);
    // @ts-ignore
    console.log('the car model', formThatSubmitted.model.value);

    const carData = getFormData(formThatSubmitted) // utility function to pull values out of named inputs 

    // if (carData.hasCleanTitle == 'on') {
    //   carData.hasCleanTitle = true
    // }
    // else {
    //   carData.hasCleanTitle = false
    // }

    carData.hasCleanTitle = carData.hasCleanTitle == 'on' // converts checkbox input value to boolean
    carData.isDrivable = carData.isDrivable == 'on'


    console.log('car data from form', carData);
    carsService.createCar(carData)

    // @ts-ignore
    formThatSubmitted.reset() // resets the form
  }
}