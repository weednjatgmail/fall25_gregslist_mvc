import { AppState } from "../AppState.js";

export class CarsController {
  constructor() {
    console.log('CARS CONTROLLER IS LOADED 🚓🚗🚙');

    this.drawCarListings()
  }

  drawCarListings() {
    console.log('drawing cars!')
    let listingContent = ''
    AppState.cars.forEach(car => {
      listingContent += car.make + car.model
    })
    const carListingElem = document.getElementById('car-listings')
    carListingElem.innerHTML = listingContent
  }
}