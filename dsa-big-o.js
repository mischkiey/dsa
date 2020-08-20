// 1. What is the Big O for this?
//     1.1. O(1)
//     1.2. O(n)

// 2. Even or Odd - What is the Big O of the following algorithm? Explain your answer.
//    O(1) - As input grows, time complexity is constant.
function isEven(value) {
    if (value % 2 === 0) {
        return true;
    }
    else {
        return false;
    };
};

// 3. Are you here? - What is the Big O of the following algorithm? Explain your answer.
//    O(n^2) - As input grows, time complexity grows at a rapid rate.
function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        };
    };
    return false;
};

// 4. Doubler - What is the Big O of the following algorithm? Explain your answer.
//    O(n) - As input grows, time complexity increases at a proportionate rate.
function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    };
    return array;
};

// 5. Naive search
//    O(n) - As input grows, time complexity grows at a rapid rate.
function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}

// 6. Creating pairs:
//    O(n^k) - As input grows, time complexity grows at a rapid rate.
function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}

// 7. Compute the sequence
//    O(n) - As input grows, time complexity grows at a proportionate rate.
function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i === 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}

// 8. An efficient search
//    O(logn) - As input grows, time complexity grows at a slow rate.
function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}

// 9. Random element
//    O(1) - As input grows, time complexity grows at a constant rate.
function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// 10. What Am I?
function isWhat(n) {
    if (n < 2 || n % 1 !== 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i === 0) return false;
    }
    return true;
}

// 11. Tower of Hanoi
function hanoi(n, source, target, auxiliary) {
    // Where n = Number of Disks
    // Base Case:
    if (n === 0) {
        return;
    };

    if (n > 0) {
        hanoi(n-1, source, auxiliary, target);
        console.log(`n: ${n}`, [source, target, auxiliary], 'Breakfast');
        target.unshift(source[0]);
        source.shift();
        console.log(`n: ${n}`, [source, target, auxiliary], 'Lunch');
        hanoi(n-1, auxiliary, target, source);
        console.log(`n: ${n}`, [source, target, auxiliary], 'Dinner');
    }
    console.table([source, target, auxiliary]);
    return 'Solved!';
}

let source = [1, 2, 3, 4];
let target = [];
let auxiliary = [];

console.log(hanoi(4, source, target, auxiliary));

// 12. Iterative Versions
// 12.1. Count Sheep
function countSheep(n) {
    for (let i = n; i > 0; i--) {
        console.log(`${i}: Another sheep jumps over the fence`)
    };
    return `All sheep jumped over the fence`
};

console.log(countSheep(3));

// 12.2 Power Calculator
function powerCalculator(base, exp) {
    let power = 1;
    for (let i = exp; i > 0; i--) {
        power *= base;
    };
    return power;
};

console.log(powerCalculator(10, 2));

// 12.3 Reverse String
function reverseString(str) {
    let reversedString = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    };
    return reversedString;
};

console.log(reverseString('Hello!'));

// 12.4 nth Triangular Number
function nthTriangularNumber(n) {
    let nthTriangularNumber = 0;
    for (let i = 0; i <= n; i++) {
        nthTriangularNumber += i;
    };
    return nthTriangularNumber;
};

console.log(nthTriangularNumber(5));

// 12.5 String Splitter
function stringSplitter(str) {
    let outputStr = [];
    let splitStr = '';

    for (let i = 0; i < str.length + 1; i++) {
        if (i === str.length) {
            outputStr.push(splitStr);
        }
        else if (str[i] !== '/') {
            splitStr += str[i];
        }
        else {
            outputStr.push(splitStr);
            splitStr = '';
        }
    }
    return outputStr;
}

console.log(printSplitStr('Breakfast/Lunch/Dinner'));

// 12.6 Fibonacci
function fib(n) {
    let fibSequence = [];

    for (let i = 0; i < n; i++) {
        if(i === 0) {
            fibSequence.push(1);
        }
        else if(i < 3) {
            fibSequence.push(i);
        }
        else {
            fibSequence.push(fibSequence[i-2] + fibSequence[i-1]);
        };
    };
    return fibSequence;
};

console.log(fib(7));

// 12.7 Factorial
function factorial(n) {
    let result = 1;

    for (let i = n; i > 0; i--) {
        result *= i;
    };
    return result;
};

console.log(factorial(5));

// 13. Recursive Big O
// 14. Iterative Big O