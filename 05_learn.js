//Primive Object
console.log("ARRAY METHODS");
//Array
let fruits = ["Apple", "Watermelon", "Orange", "Banana"];
let newFruits = ["Graps", "Sizzler", "Vanila"];
//Methods
console.log(fruits.length); // Length of Array
console.log(fruits);
console.log(fruits[0]); //Access Element By Index
console.log(fruits);
console.log(fruits.push("Mango")); // Last Index Added New Element
console.log(fruits);
console.log(fruits.pop()); // Last Index Remove Element
console.log(fruits);
console.log(fruits.unshift("Grapes")); // First Index Added New Element
console.log(fruits);
console.log(fruits.shift()); //First Index Remove Element
console.log(fruits);
console.log(fruits.indexOf("Banana")); // Give 1 Result Based on Arrray Index
console.log(fruits);
console.log(fruits.includes("Banana")); // Thats Give A true and false Result based on array if available then show true else false
console.log(fruits);
console.log(fruits.slice(1, 3)); // Its removed arrays element from starting index is 1 and ending element not include mean 3 is last index then array only removed 2 index
console.log(fruits);
console.log(fruits.sort()); // its sort array from A to Z
console.log(fruits);
console.log(fruits.reverse()); // its reversed array
console.log(fruits);
console.log(fruits.concat(["Cherry", "Strawberry"])); //its accept new aarray for adding in current element
console.log(fruits);
console.log(fruits.join(", "));
console.log(fruits);

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  console.log(`${item} is at index ${index} in ${array}`);
});

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map((item) => item.length);
console.log(lengths);
