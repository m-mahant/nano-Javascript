//MAP
let map = new Map();

map.set("1", "str1"); // a string key
map.set(1, "num1"); // a numeric key
map.set(true, "bool1"); // a boolean key

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
console.log(map.get(1)); // 'num1'
console.log(map.get("1")); // 'str1'

console.log(map.size); // 3

let recipeMap = new Map([
  ["cucumber", 500],
  ["tomatoes", 350],
  ["onion", 50],
]);

// iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
  console.log(vegetable); // cucumber, tomatoes, onion
}

// iterate over values (amounts)
for (let amount of recipeMap.values()) {
  console.log(amount); // 500, 350, 50
}

// iterate over [key, value] entries
for (let entry of recipeMap) {
  // the same as of recipeMap.entries()
  console.log(entry); // cucumber,500 (and so on)
}

// Maps can be used as objects as well
let obj = {};

for (let [key, value] of recipeMap) {
  obj[key] = value;
}

console.log(obj); // { cucumber: 500, tomatoes: 350, onion: 50 }

//Weakmap
let weakmap = new WeakMap();
let key1 = { id: 1 };
let key2 = { id: 2 };
weakmap.set(key1, "Bhavin");
weakmap.set(key2, "Pathak");
console.log(weakmap.get(key1)); // "Bhavin"
console.log(weakmap.get(key2)); // "Pathak"

//SETS
let set = new Set();
let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };
// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set keeps only unique values
console.log(set.size); // 3

for (let user of set) {
  console.log(user.name); // John (then Pete and Mary)
}

let sets = new Set(["oranges", "apples", "bananas"]);

for (let value of sets) console.log(value);

// the same with forEach:
sets.forEach((value, valueAgain, sets) => {
  console.log(value);
});

//WeakSet
let weakSet = new WeakSet();
let obj1 = {};
let obj2 = {};
weakSet.add(obj1);
weakSet.add(obj2);
console.log(weakSet.has(obj1)); // true
console.log(weakSet.has(obj2)); // true

//Array
let fruits = ["Apple", "Watermelon", "Orange", "Banana"];
console.log(fruits.length); // 4
console.log(fruits);
console.log(fruits[0]); // Apple
console.log(fruits);
console.log(fruits.push("Mango")); // 5
console.log(fruits);
console.log(fruits.pop()); // Mango

// Objects
let person = {
  name: "John",
  age: 30,
  city: "New York",
};
console.log(person.name); // John
console.log(person.age); // 30
console.log(person.city); // New York
console.log(person);
