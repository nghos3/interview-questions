// pallindrome 

let num = 121;

num = num.toString();

const splittringNum = num.split("");
const reverseStr= splittringNum.reverse();
let reverseItem = "" 
for(e of reverseStr) {
    reverseItem+=e;
}
console.log(reverseItem === num);
