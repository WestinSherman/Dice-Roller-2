// diceRoller.js

// Retrieve command-line arguments
const args = process.argv.slice(2);

// Check if the right number of arguments is provided
if (args.length !== 2) {
    console.error('Usage: node diceRoller.js <number_of_dice> <sides_per_die>');  //Just include two numbers.
    process.exit(1);
}

// Parse arguments to integers
const numDice = parseInt(args[0], 10);
const sides = parseInt(args[1], 10);

// Validate arguments
if (isNaN(numDice) || isNaN(sides) || numDice <= 0 || sides <= 0) {
    console.error('Both arguments must be positive integers.');
    process.exit(1);
}

// Roll the dice and calculate results
let total = 0;
const rolls = [];

for (let i = 0; i < numDice; i++) {
    const roll = Math.floor(Math.random() * sides) + 1; // Random number between 1 and sides
    rolls.push(roll);
    total += roll;
}

// Output results
console.log(`Rolling ${numDice}d${sides}:`);
console.log(`Rolls: ${rolls.join(', ')}`);
console.log(`Total: ${total}`);