//JSON methods, toJSON
let user = {
  name: "John",
  age: 30,

  toString() {
    return `{name: "${this.name}", age: ${this.age}}`;
  },
};

console.log(user); // {name: "John", age: 30}

let jsonUser = JSON.stringify(user);
console.log(jsonUser); // {"name":"John","age":30}
let student = {
  name: "John",
  age: 30,
  isAdmin: false,
  spouse: null,
  courses: ["html", "css", "js"],
  //   courses: "html",
};
d;
let json = JSON.stringify(student);

console.log(typeof json); // we've got a string!

console.log(json); // {"name":"John","age":30,"isAdmin":false,"courses":["html","css","js"],"spouse":null}

//parse JSON, JSON.parse
let jsonString = '{"name":"John","age":30}';
let parsedUser = JSON.parse(jsonString);
console.log(parsedUser); // {name: "John", age: 30}
