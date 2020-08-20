// Recursive Solution
function fib(n) {
    // Base Case
    if(n < 2) {
        return n;
    };

    // Recursive Case
    return fib(n-2) + fib(n-1);
};

// Iterative Solution
// function fib(n) {
//     let fibSequence = [];
//
//     for (let i = 0; i < n; i++) {
//         if(i === 0) {
//             fibSequence.push(1)
//         }
//         else if(i < 3) {
//             fibSequence.push(i);
//         }
//         else {
//             fibSequence.push(fibSequence[i-2] + fibSequence[i-1]);
//         };
//     };
//     return fibSequence;
// }

console.log(fib(5));
console.log(fib(7));