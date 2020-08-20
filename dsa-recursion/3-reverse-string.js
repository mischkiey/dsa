// Recursive Solution
function reverseString(str) {
    // Base Case
    if(str.length === 0) {
        return '';
    };

     // Recursive Case
    return str[str.length - 1] + reverseString(str.slice(0, str.length - 1));
};

//Iterative Solution
// function reverseString(str) {
//     let reversedString = '';

//     for (let i = str.length - 1; i >= 0; i--) {
//         reversedString += str[i];
//     };
//     return reversedString;
// };

console.log(reverseString('Hello!'));
console.log(reverseString('Goodbye!'));