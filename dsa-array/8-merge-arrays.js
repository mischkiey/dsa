function mergeArrays(a, b) {
    let mergedArray = [];
    let i = 0;
    let j = 0;
  
    while(i < a.length || j < b.length){
        if (a[i] - b[j] < 0){
            mergedArray.push(a[i]);
            i++;
        }
        else if (a[i] - b[j] > 0){
            mergedArray.push(b[j]);
            j++;
        }
        else if (a[i] === b[j]) {
            mergedArray.push(a[i]);
            mergedArray.push(b[j]);
            i++;
            j++;
        }
        else if (i >= a.length){
            mergedArray.push(b[j]);
            j++;
        }
        else {
            mergedArray.push(a[i]);
            i++;
        };
    };
    return mergedArray;
  };
  
  console.log(mergeArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));