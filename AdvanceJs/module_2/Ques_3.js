// Map to names
// let john = { name: "John", age: 25 }; let pete = { name:
// "Pete", age: 30 }; letmary = { name: "Mary", age: 28 };
// let users = [ john, pete, mary ]; let names
// = /* ... your code */ alert( names ); // John, Pete, Mary


let john ={name: "john", age:25};
let pete = {name:"pete", age:30};
let mary = { name: "Mary", age: 28 };
let users = [john, pete, mary];
let names = users.map(user => user.name);
alert(names);