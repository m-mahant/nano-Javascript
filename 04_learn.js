console.log("Functions------->");

function getTwoSum(a, b) {
  let c = a + b;
  return c;
}

console.log("Here Is Your Answere", getTwoSum(25, 75));

function getDetailsofUsers(name, age, email, adderss) {
  var details = { Name: name, Age: age, Email: email, Address: adderss };
  return details;
}

console.log(
  "Here is Your User Details = ",
  getDetailsofUsers("Bhavin", 25, "bhavinpathak29", "vapi")
);

function getDetailsofUser(name, age, email, adderss) {
  var details = [name, age, email, adderss];
  return details;
}

console.log(
  "Here is Your User Details = ",
  getDetailsofUser("Bhavin", 25, "bhavinpathak29", "vapi")
);

console.log("Arrow Function------->");

let add = (a, b) => a + b;
console.log("Here Is Your Answere", add(25, 75));

let getUserDetails = (name, age, email, adderss) => ({
  Name: name,
  Age: age,
  Email: email,
  Address: adderss,
});

console.log(
  "Here is Your User Details = ",
  getUserDetails("Bhavin", 25, "bhavinpathak29", "vapi")
);

console.log("Default Parameter------->");

function getDetails(
  name = "Bhavin",
  age = 25,
  email = "bhavinpathak29",
  adderss = "vapi"
) {
  //return { Name: name, Age: age, Email: email, Address: adderss };
  //return [name, age, email, adderss];
}

console.log(
  "Here is Your User Details = ",
  getDetails("Bhavin", 25, "bhavinpathak29", "vapi")
);
console.log(
  "Here is Your User Details = ",
  getDetails(undefined, undefined, "bhavinpathak29", "vapi")
);
console.log(
  "Here is Your User Details = ",
  getDetails(undefined, undefined, undefined, undefined) //If Function Perameters Is Undine Then Shows Output As A Default Perameters
);

console.log(getUserDetails("Bhavin", 25, "bhavinpathak29", "vapi"));

console.log("Rest Parameter------->");

function getUsersDetails(...details) {
  return details; //Details Shows In ARRAY
}

console.log(
  "Here is Your User Details = ",
  getUsersDetails(
    "Bhavin",
    25,
    "bhavinpathak29",
    "vapi",
    "Gokul",
    "25",
    "pathakbhavin29",
    "vapi-gunjan"
  )
);
