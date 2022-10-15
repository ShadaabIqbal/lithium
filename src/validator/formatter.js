const name = 'functionUp    '
function trimFunction () {
    const result = name.trim()
    console.log(result)
}

const sentence1 = 'SHADAAB'
function lowecaseFunction() {
const result1 = sentence1.toLocaleLowerCase()
console.log(result1)
}

const sentence2 = 'SHADAAB'
function upperCase () {
    const result2 = sentence2.toUpperCase();
    console.log(result2);
}



module.exports.trimmedFunction = trimFunction;
module.exports.myName = lowecaseFunction;
module.exports.myName2 = upperCase;