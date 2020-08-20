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