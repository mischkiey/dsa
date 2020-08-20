// Recursive Solution
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

// Iterative Solution
// function powerCalculator(base, exp) {
//     let power = 1;
//     for (let i = exp; i > 0; i--) {
//         power *= base;
//     };
//     return power;
// };

console.log(powerCalculator(10, 2));
console.log(powerCalculator(10, 4));