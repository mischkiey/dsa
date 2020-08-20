// Recursive Solution
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

// Iterative Solution
// function stringSplitter(str) {
//     let outputStr = [];
//     let splitStr = '';
//
//     for (let i = 0; i < str.length + 1; i++) {
//         if (i === str.length) {
//             outputStr.push(splitStr);
//         }
//         else if (str[i] !== '/') {
//             splitStr += str[i];
//         }
//         else {
//             outputStr.push(splitStr);
//             splitStr = '';
//         };
//     };
//     return outputStr;
// };

console.log(printSplitStr('Breakfast/Lunch/Dinner'));
