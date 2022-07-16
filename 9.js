const arr=[1,2,3, [4,5,[6,7,9]]];

const flatarr = [];
const flattern = (ary) => {
    ary.forEach((el) => {
        if(el.length) {
            flattern(el);
        }  else {
            flatarr.push(el);
        }
    });
} 


flattern(arr);

console.log(flatarr); 