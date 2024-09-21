console.log("Hola Day-1");

var a;
let b;
const c = undefined;

a = 1;
console.log(a);

b = 2;
console.log(b);

b = 3;
console.log(b); // We can asign more values to let or var keyword

console.log(typeof b); // we can cheak the variable type using typeof VARIABLE_NAME
// c = 3;
// console.log(c); // Constant Never Reasign

let fname = "Bhavin";
let sName = "Pathak";
let dummyname = "GODFATHER";

var fullname = fname + sName;

let nameExt = "     BKL     ";

console.log(fullname.length); //Find String Length
console.log(fullname[0]); // Find Position of cherector using index number
console.log(`Welcome ${fname} ${sName}`); // Interpulate
console.log(fullname.charAt(3)); //Shows Charactor of INDEX Numver
console.log(fullname.concat(dummyname)); // Add New String At The End Of Current String
console.log(fullname.endsWith("B")); //Cheak String If End With B Then True Return Otherwise False
console.log(fullname.includes("v")); //Cheak String If include v Then True Return Otherwise False
console.log(fullname.replace("B", "D")); // Replace Char By Using Charactor "B" replace With "D"
console.log(fullname.slice(2, 9)); // that is slice (Mean Remove Charectors From Start[2] end[9] thats not include [9] its worked with [8]
console.log(fullname.toUpperCase); //All Charectors in UPPERCASE
console.log(fullname.toLowerCase()); //All Charectors in LowerCASE
console.log(fullname.split(" ")); // Split String By Space
console.log(fullname.trimStart()); // Remove Extra Space From Start
console.log(fullname.trimEnd()); // Remove Extra Space From End
console.log(nameExt);
console.log(nameExt.trim()); // Remove Extra Space From Both Side
