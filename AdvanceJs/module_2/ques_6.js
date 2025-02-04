// ● Destructuring assignment We have an object: Write the
// Destructuringassignment that reads:
// a) Name property into the variable name.
// b) Year’s property into the variable age.
// c) isAdmin property into the variable isAdmin (false, if no
// such property)
// d) let user = { name: "John", years: 30};

let user = { name: "John", years: 30};
let { name, years: age, isAdmin = false } = user;

console.log(name);
console.log(age);
console.log(isAdmin);
