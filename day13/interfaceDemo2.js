var AddAndSub = /** @class */ (function () {
    function AddAndSub(num1, num2, num3, num4) {
        this.a = num1;
        this.b = num2;
        this.x = num3;
        this.y = num4;
    }
    AddAndSub.prototype.setdata = function (num1, num2, num3, num4) {
        this.a = num1;
        this.b = num2;
        this.x = num3;
        this.y = num4;
    };
    AddAndSub.prototype.add = function () {
        return this.a + this.b;
    };
    AddAndSub.prototype.sub = function () {
        return this.x - this.y;
    };
    return AddAndSub;
}());
var c = new AddAndSub(30, 40, 50, 60);
console.log(c.add());
console.log(c.sub());
console.log("after calling set method");
c.setdata(10, 20, 30, 40);
console.log(c.add());
console.log(c.sub());
