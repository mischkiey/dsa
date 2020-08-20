function urlify(str) {  
    if (str === ''){
        throw new Error('Invalid string');
    };

    let url = '';
    
    for (let i = 0; i < str.length; i++){
        if (str[i] === ' '){
        url += '%20';
        }
        else {
        url += str[i];
        };
    };

    return url;
};
  
console.log(urlify('www.thinkful.com /tauh ida parv een'));
    
// Alternate Method at 0(2n):
// function URLify(string) {
//     return string.trim().replace(/\s/g, '%20');
// };