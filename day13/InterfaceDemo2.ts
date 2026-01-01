// Base interface
interface I1 {
  a: number;
  b: number;
  add(): number;
}

// Interface extending another interface
interface I2 extends I1 {
  x: number;
  y: number;
  sub(): number;
}

// Class implementing extended interface
class AddAndSub implements I2 {
  a: number;
  b: number;
  x: number;
  y: number;

  constructor(num1: number, num2: number, num3: number, num4: number) {
    this.a = num1;
    this.b = num2;
    this.x = num3;
    this.y = num4;
  }

  setdata(num1: number, num2: number, num3: number, num4: number): void {
    this.a = num1;
    this.b = num2;
    this.x = num3;
    this.y = num4;
  }

  add(): number {
    return this.a + this.b;
  }

  sub(): number {
    return this.x - this.y;
  }
}

// Create object and call methods
var c = new AddAndSub(30, 40, 50, 60);
console.log(c.add());
console.log(c.sub());

// Update values using setdata method
console.log("after calling set method");
c.setdata(10, 20, 30, 40);
console.log(c.add());
console.log(c.sub());
