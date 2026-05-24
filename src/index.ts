import merge = require("./merge");

const c1 = [1, 3, 5];
const c2 = [6, 4, 2]; 
const c3 = [7, 8, 9];

console.log(merge(c1, c2, c3)); // [1,2,3,4,5,6,7,8,9]