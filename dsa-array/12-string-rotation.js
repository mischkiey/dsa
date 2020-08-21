function rotateStr(str1, str2) {
    let rotatedStrs = [];
    let rotatedStr = '';
    let lastRotatedStr = str1;

    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < lastRotatedStr.length; j++) {
            rotatedStr = lastRotatedStr[j] + rotatedStr;
        }

        rotatedStrs.push(rotatedStr);
        lastRotatedStr = rotatedStr;
        rotatedStr = '';
    };
    
    return rotatedStrs.includes(str2);
};

console.log(rotateStr('Hello', 'olleH'));