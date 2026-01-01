var num = 100; //access everywhare
function typeofvariable() {
    if (true) {
        num = 200;
        console.log(num);
    }
    console.log(num); //inside function access everywhere outside of the method not allowed
}
typeofvariable();
console.log(num); //print value only global variable
