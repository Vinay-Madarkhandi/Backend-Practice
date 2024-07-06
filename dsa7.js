// Import readline module for handling input from the terminal
const readline = require('readline');

// Create an interface to read from standard input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Read input from the user
rl.question( '', (input) => {
    // Convert the input to an integer
    const w = parseInt(input, 10);

    // Check if the input is valid
    if (isNaN(w) || w < 1 || w > 100) {
        console.log('Please enter a valid weight between 1 and 100.');
    } else {
        // Determine if the watermelon can be split into two even parts
        if (w % 2 === 0 && w > 2) {
            console.log('YES');
        } else {
            console.log('NO');
        }
    }

    // Close the readline interface
    rl.close();
});
