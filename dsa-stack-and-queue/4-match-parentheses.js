const Stack = require('./1a-create-stack-class');
const peek = require('./2a-peek');

// Fix later
function isBalanced(exp) {
    let stack = new Stack();
    let openingBrackets = ['(', '[', '{'];
    let closingBrackets = [')', ']', '}'];
    let i = 0;

    while(i < exp.length) {
        if(openingBrackets.includes(exp[i])) {
            stack.push(exp[i]);
        };
        if(closingBrackets.includes(exp[i])) {
            if(!peek(stack)) {
                return `Missing appropriate opening bracket near ${exp[i]} / at position ${i}`;
            };

            switch(peek(stack).value) {
                case '(':
                    if(exp[i] !== ')') {
                        stack.pop();
                        return `Expected ')' near ${exp[i]} / at position ${i}`;
                    };
                    break;
                case '[':
                    if(exp[i] !== ']') {
                        stack.pop();
                        return `Expected ']' near ${exp[i]} / at position ${i}`;
                    };
                    break;
                case '{':
                    if(exp[i] !== '}') {
                        stack.pop();
                        return `Expected '}' near ${exp[i]} / at position ${i}`;
                    };
                    break;
                default:
                    stack.pop();
            };
            
            stack.pop();
        };
        i++;
    };

    return peek(stack);
};

console.log(isBalanced('()'));

