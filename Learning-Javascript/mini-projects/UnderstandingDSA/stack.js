// helper functions such as getting the value from input and adding the value to stack
const stack = [];
const maxDisplay = 5;
const stackContainer = document.getElementById('stackContainer');
const stackInput = document.getElementById('stackInput');
const statusMessage = document.getElementById('statusMessage');

function updateUI() {
    stackContainer.innerHTML = '';

    stack.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'stack-item';
        itemDiv.innerText = item;
        stackContainer.appendChild(itemDiv);
    });

    // Update status text
    if (stack.length === 0) {
        statusMessage.innerText = "Stack is empty.";
    } else {
        statusMessage.innerText = `Top of Stack: ${stack[stack.length - 1]}`;
    }
}


function push() {
    value = stackInput.value.trim()
    if (stack.length >= maxDisplay) {
        statusMessage.innerText("Stackoverflow has occured.")
    }
    else {
        stack.push(value);
        stackInput.value = "";
        updateUI();
    }
}

function pop() {
    if (stack.length <= 0) {
        statusMessage.innerText("Stack underflow has occured.")
    }
    else {
        stack.pop();
        updateUI();
    }
}