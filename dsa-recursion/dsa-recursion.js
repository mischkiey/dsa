// 1. Counting Sheep
function countSheep(n) {
    // Base Case
    if(n === 0) {
        return `Bye bye sheep :(`;
    }

    // Recursive Case
    console.log(`${n}: Another sheep jumps over the fence`);
    return countSheep(n-1);
};

console.log(countSheep(3));

// 2. Power Calculator
function powerCalculator(base, exp) {
    // Base Case 1
    if(exp < 0) {
        return 'Exponent should be >= 0';
    };

    // Base Case 2
    if(exp === 1) {
        return base;
    };

    // Recursive Case
    return base * powerCalculator(base, exp-1);
};

console.log(powerCalculator(10, 4));

// 3. Reverse String
function reverseString(str) {
    // Base Case
    if(str.length === 0) {
        return '';
    };

    // Recursive Case
    return str[str.length-1] + reverseString(str.slice(0, str.length-1));
};

console.log(reverseString('Hello!'));

// 4. nth Triangular Number
function nthTriangularNumber(n) {
    // Base Case
    if (n === 0) {
        return 0;
    };

    // Recursive Case
    return n + nthTriangularNumber(n-1);
};

console.log(nthTriangularNumber(4));

// 5. String Splitter
function printSplitStr(str) {
    let outputStr = [];
    let splitStr = '';

    function stringSplitter(str) {
        // Base Case
        if(str.length === 0) {
            outputStr.push(splitStr);
            return outputStr;
        };
        
        //Recursive Case
        if(str[0] !== '/') {
            splitStr += str[0];
        }
        else {
            outputStr.push(splitStr);
            splitStr = '';
        };

        return stringSplitter(str.slice(1));
    };

    return stringSplitter(str);
};

console.log(printSplitStr('Breakfast/Lunch/Dinner'));

// 6. Fibonacci
function fib(n) {
    // Base Case
    if(n < 2) {
        return n;
    };

    // Recursive Case
    return fib(n-2) + fib(n-1);
};

console.log(fib(5))

// 7. Factorial
function factorial(n) {
    // Base Case
    if(n === 1) {
        return 1;
    };

    // Recursive Case
    return n * factorial(n-1);
};

console.log(factorial(5));

// 8. Maze
let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let maze = [
    [' ', ' ', ' ', ' ', ' ', ' ', 'e'],
    ['*', '*', ' ', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

const mazeRunner = function(arr, n, m) {
    // Base Case
    if(arr[n][m] === 'e') {
        return '';
    };

    // General/Recursive
    if(arr[n][m] === ' '){
        arr[n][m] = 'x';
    };

    if(m+1 < arr[n].length && (arr[n][m+1] === ' ' || arr[n][m+1] === 'e')) {
        return 'R' + mazeRunner(arr, n, m+1);
    };
    if(n+1 < arr.length && (arr[n+1][m] === ' ' || arr[n+1][m] === 'e')) {
        return 'D' + mazeRunner(arr, n+1, m);
    };
    if(m-1 >= 0 && (arr[n][m-1] === ' ' || arr[n][m-1] === 'e')) {
        return 'L' + mazeRunner(arr, n, m-1);
    };
    if(n-1 >= 0 && (arr[n-1][m] === ' ' || arr[n-1][m] === 'e')) {
        return 'U' + mazeRunner(arr, n-1, m);
    };

    if(m-1 >= 0 && (arr[n][m-1] === 'x' || arr[n][m-1] === 'e')) {
        return 'L' + mazeRunner(arr, n, m-1);
    };
    if(n-1 >= 0 && (arr[n-1][m] === 'x' || arr[n-1][m] === 'e')) {
        return 'U' + mazeRunner(arr, n-1, m);
    };
    if(m+1 < arr[n].length && (arr[n][m+1] === 'x' || arr[n][m+1] === 'e')) {
        return 'R' + mazeRunner(arr, n, m+1);
    };
    if(n+1 < arr.length && (arr[n+1][m] === 'x' || arr[n+1][m] === 'e')) {
        return 'D' + mazeRunner(arr, n+1, m);
    };
};

// 10. Anagrams
function printAnagrams(str) {
    let i = 1;
    let n = str.length;
    let totalExpectedAnagrams = factorial(n);
    let totalActualAnagrams = [];

    function anagrams(str) {
        // Base Case
        if(totalActualAnagrams.length === totalExpectedAnagrams) {
            return totalActualAnagrams;
        };

        // Recursive Case
        if(totalActualAnagrams.length !== (totalExpectedAnagrams/n)*i || totalActualAnagrams[totalActualAnagrams.length-1][0] !== str[0]) {
            prefix = str[0];
            newStr = str[str.length-1] + str.slice(1, str.length-1);
            totalActualAnagrams.push(prefix + newStr);
            return anagrams(prefix+newStr);
        }
        if(totalActualAnagrams.length === (totalExpectedAnagrams/n)*i) {
            i++;
            return anagrams(str.slice(1, str.length) + str[0]);
        };
    };
    return anagrams(str);
};
    
console.log(printAnagrams('abcde'));

// 12. Binary Representation
function toBinary(x) {
    // Base Case
    if(x === 0 || x === 1) {
        return x.toString();
    };

    // Recursive Case
    lsb = x%2; // Least Significant Bit
    remainingBits = Math.floor(x/2); // Alternatively, (x - lsb)/2
    remainingBitsToBinary = toBinary(remainingBits);
    return remainingBitsToBinary + lsb;
}

console.log(toBinary(7));