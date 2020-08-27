const Stack = require('./1a-create-stack-class.js');

function main() {
    let starTrek = new Stack();

    starTrek.push('Kirk');
    starTrek.push('Spock');
    starTrek.push('McCoy');
    starTrek.push('Scotty');

    return starTrek;
};

// console.log(main());

module.exports = main;