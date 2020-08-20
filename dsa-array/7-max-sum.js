function maxSum (arr){
    let sums = [];
    let currentSum = 0;
    let maxSum = 0;
  
    for (let i = 0; i < arr.length; i++){
      sums.push(currentSum += arr[i]);
    };
    for (let j = 0; j < sums.length; j++ ){
      if (sums[j] > maxSum){
        maxSum = sums[j];
      };
    };
    return maxSum;
};

console.log(maxSum([4, 6, -3, 5, -2, 1]));
  