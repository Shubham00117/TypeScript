// Rest parameters - accepts multiple arguments
function greet(greetingmessage: string, ...name: string[]): string {
  return greetingmessage + ". " + name.join(", ");
}

console.log(greet("shubham", "xyz", "abc"));
