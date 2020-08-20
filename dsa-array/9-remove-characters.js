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
