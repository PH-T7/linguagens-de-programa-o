class Car {
    constructor(brand) {
      this.carName = brand;
    }
    present() {
      return 'I have a ' + this.carName;
    }
  }
  
  class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
  }0
  
  let myCar = new Model("Ford", "Mustang");