const Stack = require('./1a-create-stack-class');

function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    let palindromeStack = new Stack();
    let outputS = '';

    for(let i = 0; i < s.length * 2; i++) {
        if(i < s.length) {
            palindromeStack.push(s[i]);
        }
        else {
            outputS += palindromeStack.pop();
        };
    };

    return s === outputS;
};

// True, true, true, false
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));