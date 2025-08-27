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
    // TODO show when car was listed at
  }

  get listingTemplate() {
    return `
    <div class="col-md-6 mb-3">
      <div class="shadow position-relative">
        <img
          src="https://images.unsplash.com/photo-1627771184357-b3e417586845?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI0fHx2dyUyMGJ1Z3xlbnwwfHwwfHx8Mg%3D%3D"
          alt="2000 vw bug" class="img-fluid">
        <div class="p-3">

          <div class="d-flex justify-content-between">
            <p class="fs-3 m-0">${this.year} ${this.make} ${this.model}</p>
            <div class="fs-4">
              <span class="mdi mdi-car-cog" title="Non drivable"></span>
              <span class="mdi mdi-note-check" title="Has a clean title"></span>
            </div>
          </div>
          <small>Listed on 8/27/2025</small>
          <p class="mt-3"></p>
          <p>This is a fair condition vw bug with 200 horse power and 200000 miles.</p>
        </div>
        <span class="text-success car-price bg-light px-2">$3000</span>
      </div>
    </div>
    `
  }
}

// new Car({ make: 'mazda' })