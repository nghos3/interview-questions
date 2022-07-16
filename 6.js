
// sort
arr = [3,4,6,1,2,99,-12,23,234,-999];
arr.sort((a,b)=>a-b);
console.log(arr);





const array1 = [1, 30, 4, 21, 100000];
array1.sort((a,b) =>a-b);
console.log(array1)


const arr2 = [0,0,0,1,2,2,2,2,3,3,3,3,4,4,4,4,8];
const re = {};
arr2.map((el) => {re[el] = el});

console.log(parseInt(Object.keys(re)));

