var Employee = /** @class */ (function () {
    function Employee(id, ename, edeptno) {
        this.eid = id;
        this.name = ename;
        this.deptno = edeptno;
    }
    Employee.prototype.display = function () {
        console.log("id: ".concat(this.eid, " name: ").concat(this.name, " deptno: ").concat(this.deptno));
    };
    return Employee;
}());
var emp = new Employee(100, "xyz", 101);
emp.display();
