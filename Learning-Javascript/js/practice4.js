const my_arr = ["wind", "rain", "hurricane", "apple"]
my_arr.sort()
console.log(my_arr)

// special functions of an array.

let names = ["rohit", "virat", "rahul", "bumrah"]
console.log(names.indexOf("rohit")) // 0
console.log(names.indexOf("dhoni")) //-1

// map filter reduce 

let arr = [10, 21, 23, 45, 35]
let a2 = arr.map((value) => {
    return value + 10
})

console.log(a2) // returns copy of existing array

a2 = arr.filter((value) => {
    return value < 25
})

console.log("filtering values less that 25 : " + a2) //returns copy of existing array


a3 = arr.reduce((prev, next) => {
    return prev + next
})

console.log(a3) // Returns single number


// grouping elements 
let players = [
    { name: "Rohit", role: "Batsmen" },
    { name: "virat", role: "Batsmen" },
    { name: "KL rahul", role: "Wk" },
    { name: "Bumhrah", role: "Bowler" },
    { name: "Bhuvneshwar", role: "Bowler" }
]

let team_grouped = Object.groupBy(players, ({ role }) => role)

//sparse matrix 
let array = [1,2,,,5] 
console.log(array) 

for (i of array){
    console.log(i)
}

// multi Dim array

