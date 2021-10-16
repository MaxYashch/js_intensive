class Car {
  #brand;
  #model;
  #yearOfManufacturing;
  #maxSpeed;
  #maxFuelVolume;
  #fuelConsumption;
  #currentFuelVolume;
  #isStarted;
  #mileage;

  // constructor(
  //   brand,
  //   model,
  //   yearOfManufacturing,
  //   maxSpeed,
  //   maxFuelVolume,
  //   fuelConsumption
  // ) {
  //   this.brand = brand;
  //   this.model = model;
  //   this.#isStarted = false;
  //   this.#currentFuelVolume = 0;
  //   this.#mileage = 0;
  // }

  get brand() {
    return this.#brand;
  }
  set brand(value) {
    if (typeof value !== 'string' && value.length < 1 && value.length > 50) {
      throw new Error('Enter valid brand!');
    }
    this.#brand = value;
  }

  get model() {
    return this.#model;
  }
  set model(value) {
    if (typeof value !== 'string' && value.length < 1 && value.length > 50) {
      throw new Error('Enter valid model!');
    }
    this.#model = value;
  }

  get yearOfManufacturing() {
    return this.#yearOfManufacturing;
  }
  set yearOfManufacturing(value) {
    if (
      !Number.isSafeInteger(value) &&
      value <= new Date().getFullYear() &&
      value >= 1900
    ) {
      throw new Error('Enter valid yearOfManufacturing!');
    }
    this.#yearOfManufacturing = value;
  }

  get maxSpeed() {
    return this.#maxSpeed;
  }
  set maxSpeed(value) {
    if (!Number.isSafeInteger(value) && value <= 300 && value >= 100) {
      throw new Error('Enter valid maxSpeed!');
    }
    this.#maxSpeed = value;
  }

  get maxFuelVolume() {
    return this.#maxFuelVolume;
  }
  set maxFuelVolume(value) {
    if (!Number.isSafeInteger(value) && value <= 20 && value >= 5) {
      throw new Error('Enter valid maxFuelVolume!');
    }
    this.#maxFuelVolume = value;
  }

  get fuelConsumption() {
    return this.#fuelConsumption;
  }

  set fuelConsumption(value) {
    if (!Number.isSafeInteger(value)) {
      throw new Error('Enter valid fuelConsumption!');
    }
    this.#fuelConsumption = value;
  }

  get currentFuelVolume(value = 0) {
    if (!Number.isSafeInteger(value)) {
      throw new Error('Enter valid currentFuelVolume!');
    }
    return this.#currentFuelVolume;
  }

  get isStarted(value = false) {
    if (typeof value !== 'boolean') {
      throw new Error('Enter valid fuelConsumption!');
    }
    return this.#isStarted;
  }

  get mileage(value = 0) {
    if (!Number.isSafeInteger(value)) {
      throw new Error('Enter valid mileage!');
    }
    return this.#mileage;
  }

  start() {
    if (this.#isStarted) {
      throw new Error('Машина уже заведена');
    }
    this.#isStarted = true;
  }

  shutDownEngine() {
    if (!this.#isStarted) {
      throw new Error('Машина ещё не заведена');
    }
    this.#isStarted = false;
  }

  fillUpGasTank(fuel) {
    if (!Number.isSafeInteger(fuel) || !Number.isSafeInteger(fuel) && fuel <= 0) {
      throw new Error('Неверное количество топлива для заправки');
    }
    if ((this.#currentFuelVolume + fuel) > this.#maxFuelVolume) {
      throw new Error('Топливный бак переполнен');
    }
    this.#currentFuelVolume += fuel;
  }

  drive(speed, hours) {
    if (!Number.isSafeInteger(speed)) {
      throw new Error('Неверная скорость');
    }
    if (!Number.isSafeInteger(hours)) {
      throw new Error('Неверное количество часов');
    }
    if (speed > this.#maxSpeed) {
      throw new Error('Машина не может ехать так быстро');
    }
    if (!this.#isStarted) {
      throw new Error('Машина должна быть заведена, чтобы ехать');
    }
    if ((speed * hours / this.#fuelConsumption) > this.#currentFuelVolume) {
      throw new Error('Недостаточно топлива'); // here - condition
    }
    // В иных случаях вычесть необходимое топливо и добавить пробег
    this.#currentFuelVolume = this.#currentFuelVolume - (speed * hours / this.#fuelConsumption);
    this.#mileage += speed * hours;
  }
}

module.exports = { Car };