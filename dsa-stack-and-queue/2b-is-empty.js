const main = require('./1b-create-starTrek-stack');
const starTrekStack = main();

// Modify function to check typeof argument
// Don't be lazy zzz
function isEmpty(stack) {
    return !stack.top;
};

console.log(isEmpty(starTrekStack));