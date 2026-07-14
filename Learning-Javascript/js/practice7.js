// class Stack {
//     constructor(size) {
//         this.size = size
//         this.stack = new Array(this.size)
//     }

//     push(value, top, stack = this.stack) {
//         if (stack.length < this.size) {
//             console.log("Stackoverflow..")
//             return this.stack
//         }
//         else {
//             stack[top] = value
//             console.log(`Element ${value} is pushed position ${top}`)
//             top = top + 1
//             return {
//                 stack: stack,
//                 top: top
//             }
//         }
//     }

//     pop(top, stack) {
//         if (top <= 0) {
//             console.log("Stack underflow..")
//         }
//         else {
//             stack[top] = undefined
//             console.log(`Removed ${stack[top]}`)
//             return stack
//         }

//     }

// }


// let obj = new Stack(5)
// obj.pop(0, obj.stack)


// class Queue {
//     constructor(front, rear, size) {
//         this.front = front;
//         this.rear = rear;
//         this.size = size
//         this.queue = new Array(size)
//     }

//     insert(value, front, queue = this.queue) {
//         if (queue.length <= front) {
//             console.log("Queue overflow")
//             return queue
//         }
//         else {
//             queue[front] = value
//             front = front + 1
//             console.log(queue)
//             return {
//                 front: front,
//                 queue: queue
//             }

//         }

//     }
// }

// let q = new Queue(0, 0, 5)
// queue = q.insert(10, 0, q.queue)
// queue = q.insert(20, queue.front, queue.queue)
// queue = q.insert(30, queue.front, queue.queue)
// queue = q.insert(30, queue.front, queue.queue)
// queue = q.insert(30, queue.front, queue.queue)
// queue = q.insert(30, queue.front, queue.queue)


// promise chaining 
let age = 19;


let promise1 = new Promise((resolve, reject) => {
    if (age <= 18) {
        reject("You are not an adult.");
    }
    else {
        console.log("approval granted!!")
        resolve(age);
    }
});

promise1.then(
    (value) => {
        let promise2 = new Promise((resolve,reject)=>{
            if (age > 19){
                resolve(age)
            }else{
                reject("You are just 19.");
            }
        });

        promise2.then((value) => console.log("you are greater than 19 so you are 20 years old"));
    }
)
