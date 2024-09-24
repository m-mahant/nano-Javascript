let json = '{"name":"John", "age": 30}'; // data from the server

let user = JSON.parse(json); // convert the text representation to JS object

// now user is an object with properties from the string
console.log(user.name); // John
console.log(user.age); // 30

let jsons = "{ bad json }";

try {
  let user = JSON.parse(jsons); // <-- when an error occurs...
  console.log(user.name); // doesn't work
} catch (e) {
  // ...the execution jumps here
  console.log(
    "Our apologies, the data has errors, we'll try to request it one more time."
  );
  console.log(e.name);
  console.log(e.message);
}

let jsona = '{ "age": 30 }'; // incomplete data

try {
  let user = JSON.parse(jsona); // <-- no errors
  console.log(user.name); // no name!
} catch (err) {
  console.log("doesn't execute");
}
