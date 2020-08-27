const main = require('./1b-create-starTrek-stack');
const starTrekStack = main();
const display = require('./2c-display');

starTrekStack.pop();
starTrekStack.pop();

console.log(display(starTrekStack));