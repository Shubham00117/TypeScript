function greet(greetingmessage) {
    var name = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        name[_i - 1] = arguments[_i];
    }
    return greetingmessage + ". " + name.join(", ");
}
console.log(greet("shubham", "xyz", "abc"));
