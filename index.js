class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return this.radius * 2;
  }

  get circumference() {
    return this.diameter * Math.PI;
  }

  get area() {
    return (this.radius ** 2) * Math.PI;
  }

  set diameter(number) {
    this.radius = number/2;
  }

  set circumference(number) {
    this.radius = (number / 2) / Math.PI;
  }

  set area(number) {
    this.radius = Math.sqrt(number / Math.PI);
  }

}