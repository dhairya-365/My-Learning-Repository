const process = require("process")

console.log(process.argv);
// console.log(process.env.NODE_ENV);
console.log(process.cwd());

process.on("exit", (code) => {
    console.log(`Exiting with code: ${code}`);
});

console.log("Current cpu usage in millsecs : " + process.cpuUsage().user)

console.log("Memory usage : " + process.memoryUsage().heapUsed)

// return complete resourse usage of system.
console.log(process.resourceUsage());