// OOP in javaScript 
class Employee {
    #salary;
    _age;
    constructor(name, dept, salary, age) {
        this.name = name;
        this.dept = dept;
        this.#salary = salary;
        this._age = age
    }
    #showSalary() {
        console.log("your salary is " + this.#salary)
    }
    get getEmployeeDetails() {
        return {
            name: this.name,
            dept: this.dept,
            age: this._age,
        };
    }

    set setEmployeeDetails(details) {
        this.name = details.name;
        this.dept = details.dept;
        this._age = details.age;
    }

    logDetail() {
        console.log(this.name, this.dept)
        this.#showSalary()
    }
}

// let obj1 = new Employee("Dhairya", "AI", 100000, 22)
// obj1.logDetail()

// obj1.setEmployeeDetails = { "name": "S1mple", "dept": "COMP", "age": 23 }
// obj1.logDetail()

// console.log(`Accessing a protected variable :${obj1._age}`)


// simple inheritance 

// class parent {
//     constructor(name) {
//         this.name = name
//     }
//     greet() {
//         console.log(`Hello ${this.name}`)
//     }
// }

// class child extends parent {
//     constructor(name, age) {
//         super(name)
//         this.age = age
//     }
//     greet() {
//         super.greet()
//         console.log(`Hello ${this.name}, your age is ${this.age}`)
//     }
// }

// let obj = new parent("S1mple")
// let obj1 = new child("Dhairya", "23")
// obj1.greet()


// multilevel inheritance 

// class parent1 {
//     constructor(name) {
//         this.name = name
//     }
//     greet() {
//         console.log(`Hello ${this.name}`)
//     }
// }

// class parent2 extends parent1 {
//     constructor(name, age) {
//         super(name)
//         this.age = age
//     }
//     greet() {
//         super.greet()
//         console.log(`Im ${this.age} old.`)
//     }
// }

// class child extends parent2 {
//     constructor(name, age) {
//         super(name)
//         this.age = age
//     }
//     greet() {
//         super.greet()
//         console.log(`Hello ${this.name}, your age is ${this.age}`)
//     }
// }

// let obj = new child("Dhairya", 22)
// obj.greet()


// Composition 
const canBowl = (state) => ({
    bowl: () => console.log(`${state.name} can bowl.`)
})

const canBat = (state) => ({
    bat: () => console.log(`${state.name} can bat.`)
})
function createPlayer(name) {
    state = { name }

    return Object.assign(
        state,
        canBat(state),
        canBowl(state)
    )
}

const player1 = createPlayer("Rohit")
player1.bowl()
player1.bat()
