let arr = [2,3,5,7,6,1,4];

let n = 7;

// wap pairs that gives sum of n


const  givePairs = (arr, sum) => {
   const pairs = [];

    arr.forEach((elm, i) => {
       const newElm = sum-elm;
        for(let j = i; j<= arr.length; j++) {
            if(arr[j] === newElm) {
                pairs.push([elm, arr[j]]);
            }
        }
    });

    return pairs;
}


// const givePairs2 = (arr, sum) => {
//     const arrClone=[];
//     for(let i=0, j=0; i< arr.length; ) {
//         newElm = n - arr[i];
//         arrClone.push(newElm);
//         arrClone.
//     }
// }

console.log(givePairs(arr,n));