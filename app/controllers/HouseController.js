
import { AppState } from "../AppState.js"
import { houseService } from "../services/HouseService.js"
import { getFormData } from "../utils/FormHandler.js"





//HousesController.js
export class HouseController {
    constructor() {
        console.log("HOUSE CONTROLLER IS LOADED")

        AppState.on("house", this.drawHouseListings)
        houseService.loadHouses()
        this.drawHouseListings()

    }


    drawHouseListings() {
        let housesHTML = ""
        AppState.houses.forEach(house => { housesHTML += house.description }) // pull house data from appstate

        const houseListingElem = document.getElementById("house-listings");
        houseListingElem.innerHTML = housesHTML;

    }
}