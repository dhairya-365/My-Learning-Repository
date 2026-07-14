const MAX_SIZE = 5;

let front = 0;
let rear = 0;
const queue = []


// 2. DOM Elements you will need to manipulate:
const queueContainer = document.getElementById('queueContainer');
const queueInput = document.getElementById('queueInput');
const statusMessage = document.getElementById('statusMessage');



function updateUI() {
    queueContainer.innerHTML = '';

    queue.forEach((item) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'queue-item';
        itemDiv.innerText = item;
        queueContainer.appendChild(itemDiv);
    });

    if (queue.length === 0) {
        statusMessage.style.color = '#7f8c8d';
        statusMessage.innerText = "Queue is empty.";
    } else if (queue.length === MAX_SIZE) {
        statusMessage.style.color = '#e74c3c'; // Red warning color
        statusMessage.innerText = `Queue is FULL (${queue.length}/${MAX_SIZE}). Front element: "${queue[0]}"`;
    } else {
        statusMessage.style.color = '#7f8c8d';
        statusMessage.innerText = `Items in queue: ${queue.length}/${MAX_SIZE}. Next to leave: "${queue[0]}"`;
    }
}

/**
 * Action: Add item to the back of the queue
 */
function enqueue() {
    const value = queueInput.value.trim();

    if (value === " ") {
        statusMessage.innerText = "provided input is invalid."
    }
    else if (queue.length <= front) {
        statusMessage.innerText = ("Queue overflow has occured.")
        console.log("here")
    }
    else {
        queue[front] = value
        front = front + 1
    }
    console.log(!true)
    updateUI()
}

/**
 * Action: Remove item from the front of the queue
 */
function popQueue() {
    // Write your logic here:
    // - Check for Queue Underflow
    // - Update your data structure
    // - Render updates to the DOM

}

/**
 * Suggestion: Create a helper function to clear 'queueContainer' 
 * and re-render '.queue-item' divs based on your current data state.
 */
