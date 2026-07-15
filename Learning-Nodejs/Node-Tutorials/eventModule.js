// creating a custom event 

const EventEmitter = require('events')

const customEmitter = new EventEmitter();

customEmitter.on("Clockin", () => {
    console.log("Clockin successfull");
})

customEmitter.emit('Clockin');

// creating a custom event emitter with parameters 

// listener 
customEmitter.on("NewEvent", (name, id) => {
    console.log(`this event was triggered by ${name} with ID ${id}.`)
})

customEmitter.emit("NewEvent","Dhairya",45);


customEmitter.prependListener("PrependedListener",()=>{
    console.log("this emitter has a prepended listener")
})

console.log(customEmitter.eventNames())
