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
}

// new Car({ make: 'mazda' })