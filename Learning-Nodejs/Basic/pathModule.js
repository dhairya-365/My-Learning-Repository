const path = require("path");

console.log("Current path : " + path.basename("Learning-Nodejs/Basic/pathModule.js"));

// return all the working process in the system 
// console.log(process.env.PATH);

console.log("Directory name : " + path.dirname("Learning-Nodejs/Basic/pathModule.js"));

console.log("Check whether the path exists : " + path.matchesGlob("Learning-Nodejs/Basic", "Learning-Nodejs/*"))

console.log("Joined path : " + path.join("C", "users", "Dhairya", "Docs"))

console.log("Parsed path : " + path.parse("Learning-Nodejs/Basic/pathModule.js").base)

