//LOOPS
let names = [
  "Bhavin",
  "Shivam",
  "Dipesh",
  "Rahul",
  "Mayur",
  "Himanshu",
  "Ajit",
];
let fruitsName = ["Apple", "Banana", "Mango", "Watermelon"];

// FOR Loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

for (let j = 0; j < fruitsName.length; j++) {
  console.log(fruitsName[j]);
}

// FOR...OF Loop
for (let name of names) {
  console.log(name);
}

// FOR...IN Loop
for (let i in names) {
  console.log(names[i]);
}

// FOREACH...OF Loop with Index
names.forEach((name, index) => console.log(`Here is Your ${index} : ${name}`));

// WHILE Loop
let j = 0;
while (j < 5) {
  console.log(j);
  j++;
}

// DO...WHILE Loop
let k = 0;
do {
  console.log(k);
  k++;
} while (k < 5);
