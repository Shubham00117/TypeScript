// Interface definition
interface IEmployee {
  eid: number;
  name: string;
  depId: number;
  displayData: () => void;
}

// Object implementing interface
var emp1: IEmployee = {
  eid: 100,
  name: "john",
  depId: 101,

  displayData(): void {
    console.log(`eid: ${this.eid} john: ${this.name} depId: ${this.depId}`);
  },
};

emp1.displayData();
