class Car {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  public getCarAge(): number {
    const currentYear: number = new Date().getFullYear();
    return currentYear - this.year;
  }
}

const car = new Car("Honda", "Civic", 2018);
car.getCarAge();
