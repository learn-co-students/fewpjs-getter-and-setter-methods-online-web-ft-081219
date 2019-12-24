class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return this.radius * 2
  }

  get circumference() {
    return Math.PI * this.radius * 2
  }

  get area() {
    return this.radius ** 2 * Math.PI
  }

  set diameter(n) {
    this.radius = n / 2
  }

  set circumference(n) {
    this.radius = n / 2 / Math.PI
  }

  set area(n) {
    this.radius = Math.sqrt(n / Math.PI)
  }
}