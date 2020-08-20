// 9. Remove Characters
function removeCharacters(str, key) {
    let outputStr = '';

    for (let i = 0; i < str.length; i++) {
       if (![...key].includes(str[i])) {
           outputStr += str[i];
       };
    };

    return outputStr;
};

console.log(removeCharacters('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));

// 10. Products
function products(arr) {
    let product = 1;
    let results = [];

    for (let i = 0; i < arr.length * 2; i++) {
        if(i < arr.length) {
            product *= arr[i]; 
        }
        else {
            results.push(product/arr[i-arr.length]);
        };
    };
    
    return results;
};

console.log(products([1, 3, 9, 4]));

// 11. 2D array
// function sweeper(arr) {
//     let m = 0;
//     let n = 0;
//     let row = 0;
//     let column = 0;
    
//     while(m < arr.length || n < arr[0].length) {
//         if (arr[m][n] === 0) {
            
//         }
//     }
// }

// 12. String Rotation
function rotateStr(str1, str2) {
    let results = [];
    let rotatedStr = '';
    let lastRotatedStr = str1;

    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < lastRotatedStr.length; j++) {
            rotatedStr = lastRotatedStr[j] + rotatedStr;
        }
        results.push(rotatedStr);
        lastRotatedStr = rotatedStr;
        rotatedStr = '';
    };
    
    if(results.includes(str2)) {
        return true;
    }
    return false;
};

console.log(rotateStr('Hello', 'olleH'));