function charCount(str) {
    const result = {};
    for (let char of str) {
        char = char.toLowerCase();
            if (/[a-z0-9]/.test(char)) {
                result[char] = ++result[char] || 1; // I didn't knew this syntax trick. If left of || is falsey, the right side kicks in.
            }
    }
    return result;
}

console.log(charCount("aabbbcccc!@#$"));
