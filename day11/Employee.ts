// Class with properties and methods
class Employee {
  eid: number;
  name: string;
  deptno: number;

  constructor(id: number, ename: string, edeptno: number) {
    this.eid = id;
    this.name = ename;
    this.deptno = edeptno;
  }

  public setData(id: number, ename: string, edeptno: number) {
    this.eid = id;
    this.name = ename;
    this.deptno = edeptno;
  }

  display(): void {
    console.log(`id: ${this.eid} name: ${this.name} deptno: ${this.deptno}`);
  }
}

// Create object using constructor
var emp = new Employee(100, "xyz", 101);

// Initialize using object reference
emp.eid = 100;
emp.name = "tuv";
emp.deptno = 21;

// Set value using method
emp.setData(11, "abc", 101);

// Call display method
emp.display();
