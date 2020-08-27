const main = require('./1b-create-starTrek-stack');
// const starTrekStack = main();

function peek(stack) {
    // if(!stack.top) {
    //     return null;
    // };

    return stack.top;
};

// console.log(peek(starTrekStack));

module.exports = peek;