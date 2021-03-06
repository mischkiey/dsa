// Recursive Solution

// First Attempt
// function printAnagrams(str) {
//     let i = 1;
//     let n = str.length;
//     let totalExpectedAnagrams = factorial(n);
//     let totalActualAnagrams = [];

//     function anagrams(str) {
//         // Base Case
//         if(totalActualAnagrams.length === totalExpectedAnagrams) {
//             return totalActualAnagrams;
//         };

//         // Recursive Case
//         if(totalActualAnagrams.length !== (totalExpectedAnagrams/n)*i || totalActualAnagrams[totalActualAnagrams.length-1][0] !== str[0]) {
//             prefix = str[0];
//             newStr = str[str.length-1] + str.slice(1, str.length-1);
//             totalActualAnagrams.push(prefix + newStr);
//             return anagrams(prefix+newStr);
//         };
//         if(totalActualAnagrams.length === (totalExpectedAnagrams/n)*i) {
//             i++;
//             return anagrams(str.slice(1, str.length) + str[0]);
//         };
//     };
//     return anagrams(str);
// };

// Second Attempt
function printAnagrams(prefix, str) {
    if(str.length === 1) {
        console.log(prefix + str);
        return;
    };

    for(let i = 0; i < str.length; i++) {
        printAnagrams(prefix+str[i], str.slice(0, i) + str.slice(i+1, str.length))
    };
};
    
console.log(printAnagrams('', 'abc'));