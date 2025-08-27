import { generateId } from "../utils/GenerateId.js"

export class Car {
  constructor(data) {
    this.id = generateId() // generates a super unique id
    this.make = data.make
    this.model = data.model
    this.price = parseInt(data.price) // convert a string into a number, ex: '7' => 7, 'cat' => NaN
    this.imgUrl = data.imgUrl
    this.mileage = parseInt(data.mileage)
    this.color = data.color
    this.year = parseInt(data.year)
    this.horsePower = data.horsePower
    this.hasCleanTitle = data.hasCleanTitle
    this.isDrivable = data.isDrivable
    this.condition = data.condition || 'unknown' // defaults to unknown if the data does not have a condition
    // NOTE Date is a class built into Javascript, that will return an object based on your browser's date and time
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
    this.listedAt = data.listedAt == undefined ? new Date() : new Date(data.listedAt)
  }

  get listingTemplate() {
    return `
    <div class="col-md-6 mb-3">
      <div class="shadow position-relative car-border" style="border-color: ${this.color};">
        <img
          src="${this.imgUrl}"
          alt="${this.year} ${this.make} ${this.model}" class="car-img">
        <div class="p-3">

          <div class="d-flex justify-content-between">
            <p class="fs-3 m-0">${this.year} ${this.make} ${this.model}</p>
            <div class="fs-4">
              ${this.drivableIcon}
              ${this.titleIcon}
            </div>
          </div>
          <small title="${this.listedAtTime}">Listed on ${this.listedAtDate}</small>
          <p class="mt-3"></p>
          <p>This is a ${this.condition} condition ${this.make} ${this.model} with ${this.horsePower} horse power and has ${this.mileageWithCommas} miles.</p>
          <div class="text-end">

           <!-- NOTE if you are passing a string as an argument, make sure to surround that string with single quotes ('') -->
            <button onclick="app.carsController.deleteCar('${this.id}')" class="btn btn-outline-danger" type="button">
              <span class="mdi mdi-delete"></span> Delete
            </button>
          </div>
        </div>
        <span class="text-success car-price bg-light px-2">${this.priceAsUSD}</span>
      </div>
    </div>
    `
  }

  get priceAsUSD() {
    return '$' + this.price.toLocaleString() // $12,000
  }

  get mileageWithCommas() {
    return this.mileage.toLocaleString() // 12,000
  }

  get titleIcon() {
    // if(this.hasCleanTitle == true)
    if (this.hasCleanTitle) {
      return '<span class="mdi mdi-note-check" title="Has a clean title"></span>'
    }
    // else
    return '<span class="mdi mdi-note-off" title="Does not have a clean title"></span>'
  }

  get drivableIcon() {
    if (this.isDrivable) {
      return '<span class="mdi mdi-car" title="Ready to drive home"></span>'
    }
    return '<span class="mdi mdi-car-cog" title="Bring a trailer"></span>'
  }

  get listedAtDate() {
    return this.listedAt.toLocaleDateString() // 8/27/2025
  }

  get listedAtTime() {
    return this.listedAt.toLocaleTimeString() // 11:11:00 AM
  }
}
