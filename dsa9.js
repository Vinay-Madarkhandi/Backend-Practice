//code forces A. way too long words 

// Import the readline module for reading input
const readline = require('readline');

// Create an interface to read lines from stdin
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Array to store the words
let words = [];

// Read the number of words
rl.question('', (n) => {
    n = parseInt(n, 10);

    if (isNaN(n) || n < 1 || n > 100) {
        console.log('Please enter a valid number of words between 1 and 100.');
        rl.close();
        return;
    }

    console.log(``);

    rl.on('line', (line) => {
        words.push(line);

        // Check if we have read enough words
        if (words.length === n) {
            // Process each word
            words.forEach((word) => {
                if (word.length > 10) {
                    // Abbreviate the word
                    const abbreviated = `${word[0]}${word.length - 2}${word[word.length - 1]}`;
                    console.log(abbreviated);
                } else {
                    // Print the word as it is
                    console.log(word);
                }
            });

            // Close the readline interface
            rl.close();
        }
    });
});
