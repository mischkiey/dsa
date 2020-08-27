const main = require('./1b-create-starTrek-stack');
const starTrekStack = main();

// Iterative
function display(stack) {
    let currentStack = stack.top;

    while(currentStack.next) {
        console.log(currentStack.value);
        currentStack = currentStack.next;
    };

    return 'You have reached Bikini Bottom.';
};

// console.log(display(starTrekStack));

module.exports = display;