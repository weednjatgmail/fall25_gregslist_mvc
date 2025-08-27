export class Car {
  constructor(data) {
    this.make = data.make
    this.model = data.model
    this.price = data.price
    this.imgUrl = data.imgUrl
    this.mileage = data.mileage
    this.color = data.color
    this.year = data.year
    this.horsePower = data.horsePower
    this.hasCleanTitle = data.hasCleanTitle
    this.isDrivable = data.isDrivable
    this.condition = data.condition
    // NOTE Date is a class built into Javascript, that will return an object based on your browser's date and time
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
    this.listedAt = new Date()
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
          <p>This is a ${this.condition} condition ${this.make} ${this.model} with ${this.horsePower} horse power and has ${this.mileage} miles.</p>
        </div>
        <span class="text-success car-price bg-light px-2">${this.priceAsUSD}</span>
      </div>
    </div>
    `
  }

  get priceAsUSD() {
    return '$' + this.price.toLocaleString()
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
    return this.listedAt.toLocaleDateString() // 12/20/2020
  }

  get listedAtTime() {
    return this.listedAt.toLocaleTimeString() // 11:11:00 AM
  }
}
