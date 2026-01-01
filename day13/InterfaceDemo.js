var emp1 = {
    eid: 100,
    name: "john",
    depId: 101,
    displayData: function () {
        console.log("eid: ".concat(this.eid, " john: ").concat(this.name, " depId: ").concat(this.depId));
    },
};
emp1.displayData();
