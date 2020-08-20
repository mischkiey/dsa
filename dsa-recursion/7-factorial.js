// Recursive Solution
function factorial(n) {
    // Base Case
    if(n === 1) {
        return 1;
    };

    // Recursive Case
    return n * factorial(n-1);
};

// Iterative Solution
// function factorial(n) {
//     let result = 1;

//     for (let i = n; i > 0; i--) {
//         result *= i;
//     };
//     return result;
// };

console.log(factorial(5));