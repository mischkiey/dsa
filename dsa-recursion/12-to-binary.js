// Recursive Solution
function toBinary(x) {
    // Base Case
    if(x === 0 || x === 1) {
        return x.toString();
    };

    // Recursive Case
    lsb = x%2; // Lease Significant Bit
    remainingBits = Math.floor(x/2); // Alternatively, (x - lsb)/2
    remainingBitsToBinary = toBinary(remainingBits);
    return remainingBitsToBinary + lsb;
};

console.log(toBinary(7));