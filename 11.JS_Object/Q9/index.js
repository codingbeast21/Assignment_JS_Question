class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  area() {
    return +(Math.PI * this.radius ** 2).toFixed(2);
  }

  perimeter() {
    return +(2 * Math.PI * this.radius).toFixed(2);
  }
}

const myCircle = new Circle(7);
console.log("Area:", myCircle.area());         
console.log("Perimeter:", myCircle.perimeter());
