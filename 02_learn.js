///if-else
let fname = "Bhavin";
let sname = "Pathak";

if (fname == sname) {
  console.log("First Name and Second Name are Same");
} else {
  console.log("First Name and Second Name are Not Same");
}

//nasted-if-elseif-else
let f = 10;
let g = 20;

if (f > g) {
  console.log("F is Greater then G");
} else if (f < g) {
  console.log("F is Smaller then G");
} else if (g <= h) {
  console.log("G is Greater then H");
} else if (g >= h) {
  console.log("G is Smaller then H");
} else {
  console.log("Default:");
}

//SWITCH-CASE
let eg = "MANGO";

switch (eg) {
  case "APPLE":
    console.log("Apple find at 1 case");
    break;
  case "BANANA":
    console.log("Banana find at 2 case");
    break;
  case "Mango":
    console.log("Mango find at 3 case");
    break;
  case "MANGO":
    console.log("Mango find at 4 case");
    break;
  default:
    console.log("Default Case");
    break;
}
