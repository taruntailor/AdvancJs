// Turn the object into JSON and back Turn the user into JSON
// and then read itback into another variable.
// user = { name: "John Smith", age: 35};

let user = { name: "John Smith", age: 35};

let json = JSON.stringify(user);

let parsedUser = JSON.parse(json);

console.log(JSON);
console.log(parsedUser);