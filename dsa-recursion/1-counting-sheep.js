// Recursive Solution
function countSheep(n) {
    // Base Case
    if(n === 0) {
        return `Bye bye sheep :(`;
    }

    // Recursive Case
    console.log(`${n}: Another sheep jumps over the fence`);
    return countSheep(n-1);
};

// Iterative Solution
// function countSheep(n) {
//     for (let i = n; i > 0; i--) {
//         console.log(`${i}: Another sheep jumps over the fence`);
//     };
//
//     return `All sheep jumped over the fence`;
// };

console.log(countSheep(3));
