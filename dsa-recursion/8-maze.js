// Recursive
const mazeRunner = function(arr, n = 0, m = 0) {
    // Base Case
    if(arr[n][m] === 'e') {
        return '';
    };

    // General/Recursive Case
    if(arr[n][m] === ' '){
        arr[n][m] = 'x';
    };

    if(m+1 < arr[n].length && (arr[n][m+1] === ' ' || arr[n][m+1] === 'e')) {
        return 'R' + mazeRunner(arr, n, m+1);
    };
    if(n+1 < arr.length && (arr[n+1][m] === ' ' || arr[n+1][m] === 'e')) {
        return 'D' + mazeRunner(arr, n+1, m);
    };
    if(m-1 >= 0 && (arr[n][m-1] === ' ' || arr[n][m-1] === 'e')) {
        return 'L' + mazeRunner(arr, n, m-1);
    };
    if(n-1 >= 0 && (arr[n-1][m] === ' ' || arr[n-1][m] === 'e')) {
        return 'U' + mazeRunner(arr, n-1, m);
    };

    if(m-1 >= 0 && (arr[n][m-1] === 'x' || arr[n][m-1] === 'e')) {
        return 'L' + mazeRunner(arr, n, m-1);
    };
    if(n-1 >= 0 && (arr[n-1][m] === 'x' || arr[n-1][m] === 'e')) {
        return 'U' + mazeRunner(arr, n-1, m);
    };
    if(m+1 < arr[n].length && (arr[n][m+1] === 'x' || arr[n][m+1] === 'e')) {
        return 'R' + mazeRunner(arr, n, m+1);
    };
    if(n+1 < arr.length && (arr[n+1][m] === 'x' || arr[n+1][m] === 'e')) {
        return 'D' + mazeRunner(arr, n+1, m);
    };
};

let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];


let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

console.log(mazeRunner(maze));