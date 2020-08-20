// 1. Counting Sheep

function countSheep(n) {
    if(n === 0) {
        return 'Bye bye sheep :(';
    }
    console.log(n + ': Another sheep jumps over the fence');
    return countSheep(n-1);
};

console.log(countSheep(3));

// 2. Power Calculator

function powerCalculator(base, exp) {
    if(exp < 0) {
        return 'Exponent should be >= 0';
    };

    if(exp === 1) {
        return base;
    };

    return base * powerCalculator(base, exp-1);
};

console.log(powerCalculator(10, 4));

// 3. Reverse String

function reverseString(str) {
    if(str.length === 0) {
        return '';
    };

    return str[str.length-1] + reverseString(str.slice(0, str.length-1));
};

console.log(reverseString('Hello!'));

// 4. nth Triangular Number

function triangularNumber(n) {
    if (n === 0) {
        return 0;
    };

    return n + triangularNumber(n-1);
};

console.log(triangularNumber(4));

// 5. String Splitter

function printSplitStr(str) {
    let splitStr = '';
    let outputStr = [];

    function stringSplitter(str) {
        if(str.length === 0) {
            outputStr.push(splitStr)
            return outputStr;
        };
    
        if(str[0] !== '/') {
            splitStr += str[0];
        }
        else {
            outputStr.push(splitStr)
            splitStr = '';
        };

        return stringSplitter(str.slice(1));
    };

    return stringSplitter(str);
};

console.log(printSplitStr('Meow/Arf/Grrr'));

// 6. Fibonacci

function fib(n) {
    if(n < 2) {
        return n;
    };

    return fib(n-2) + fib(n-1);
};

console.log(fib(5))

// 7. Factorial

function factorial(n) {
    if(n === 1) {
        return 1;
    };

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

const mazeRunner = function(arr, n, m, cache) {
    cache = cache || {};

    // Base Case
    
    if(arr[n][m] === 'e') {
        return '';
    };

    // General/Recursive
    if (!cache[n]) {
        cache[n] = [];
        if(m+1 < arr[n].length && (arr[n][m+1] === ' ' || arr[n][m+1] === 'e')) {
            if(cache[n])
            // console.log(cache)
            cache[n].push('R');
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
    }
    else {
        if(m+1 < arr[n].length && (arr[n][m+1] === ' ' || arr[n][m+1] === 'e')) {
            if(cache)
            console.log(cache)
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
    }
};

console.log(mazeRunner(maze, 0 , 0));

// const mazeRunner = function(arr, n, m) {
//     // Base Case
//     if(arr[n][m] === 'e') {
//         return '';
//     };

//     // General/Recursive
//     if(arr[n][m] === ' '){
//         arr[n][m] = 'x';
//     };

//     if(m+1 < arr[n].length && (arr[n][m+1] === ' ' || arr[n][m+1] === 'e')) {
//         return 'R' + mazeRunner(arr, n, m+1);
//     };
//     if(n+1 < arr.length && (arr[n+1][m] === ' ' || arr[n+1][m] === 'e')) {
//         return 'D' + mazeRunner(arr, n+1, m);
//     };
//     if(m-1 >= 0 && (arr[n][m-1] === ' ' || arr[n][m-1] === 'e')) {
//         return 'L' + mazeRunner(arr, n, m-1);
//     };
//     if(n-1 >= 0 && (arr[n-1][m] === ' ' || arr[n-1][m] === 'e')) {
//         return 'U' + mazeRunner(arr, n-1, m);
//     };

//     if(m-1 >= 0 && (arr[n][m-1] === 'x' || arr[n][m-1] === 'e')) {
//         return 'L' + mazeRunner(arr, n, m-1);
//     };
//     if(n-1 >= 0 && (arr[n-1][m] === 'x' || arr[n-1][m] === 'e')) {
//         return 'U' + mazeRunner(arr, n-1, m);
//     };
//     if(m+1 < arr[n].length && (arr[n][m+1] === 'x' || arr[n][m+1] === 'e')) {
//         return 'R' + mazeRunner(arr, n, m+1);
//     };
//     if(n+1 < arr.length && (arr[n+1][m] === 'x' || arr[n+1][m] === 'e')) {
//         return 'D' + mazeRunner(arr, n+1, m);
//     };
// };

// 10. Anagrams

// function printAnagrams(str) {
//     let n = str.length;
//     let totalExpectedAnagrams = factorial(n);
//     let totalActualAnagrams = 0;

//     function anagrams(str) {
//         if(totalActualAnagrams === totalExpectedAnagrams) {
//             return;
//         }

//         prefix = str[0];
//         newStr = str[str.length-1] + str.slice(1, str.length-1);
//         return prefix + anagrams(newStr);
//     };

//     return anagrams(str);
// };

// function printAnagrams(str) {
//     if(str.length)
// }

printAnagrams('east');

// function printAnagrams(str) {
//     let i = 1;
//     let n = str.length;
//     let totalExpectedAnagrams = factorial(n);
//     let totalActualAnagrams = [];

//     function anagrams(str) {
//         if(totalActualAnagrams.length === totalExpectedAnagrams) {
//             return totalActualAnagrams;
//         };

//         if(totalActualAnagrams.length !== (totalExpectedAnagrams/n)*i || totalActualAnagrams[totalActualAnagrams.length-1][0] !== str[0]) {
//             prefix = str[0];
//             newStr = str[str.length-1] + str.slice(1, str.length-1);
//             totalActualAnagrams.push(prefix + newStr);
//             return anagrams(prefix+newStr)
//         }
//         if(totalActualAnagrams.length === (totalExpectedAnagrams/n)*i) {
//             i++;
//             return anagrams(str.slice(1, str.length) + str[0]);
//         }
//     };
//     return anagrams(str);
// };
    
// console.log(printAnagrams('abcde'))

// 12. Binary Representation

function toBinary(x) {
    if(x === 0 || x === 1) {
        return x.toString();
    };

    lsb = x%2;
    remainingBits = Math.floor(x/2); // Alternatively, (x - lsb)/2
    remainingBitsToBinary = toBinary(remainingBits);
    return remainingBitsToBinary + lsb;
}

console.log(toBinary(7));