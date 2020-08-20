// Recursive Solution
function nthTriangularNumber(n) {
    // Base Case
    if (n === 0) {
        return 0;
    };

    // Recursive Case
    return n + nthTriangularNumber(n-1);
};

// Iterative Solution
// function nthTriangularNumber(n) {
//     let nthTriangularNumber = 0;
//     for (let i = 0; i <= n; i++) {
//         nthTriangularNumber += i;
//     };
//     return nthTriangularNumber;
// };

console.log(nthTriangularNumber(4));
console.log(nthTriangularNumber(5));