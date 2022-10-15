const lodash = require('lodash')


const months = ['JAN', 'FEB', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER']
function chunkFunction() {
    const result = lodash.chunk(months, 4)
    console.log(result)
}

const numbers = [1, 3, 5, 7, 9, 11, 13, 15, 17 , 19]
function tailFunction() {
const result2 = lodash.tail(numbers)
console.log(result2)
}

const a = [1,1]
const b = [2,2]
const c = [3,3]
const d = [4,4]
const e = [5,5]
function unionFunction() {
const result3 = lodash.union(a,b,c,d,e)
console.log(result3)
}

const pairs =  [['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']]
function pairsFunction() {
const result4 = lodash.fromPairs(pairs)
console.log(result4)
}

module.exports.chunks = chunkFunction;
module.exports.tailed = tailFunction;
module.exports.unique = unionFunction;
module.exports.pairs1 = pairsFunction; 