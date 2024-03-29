
function minSubArray (arr, number) {
var curr_sum = 0;
var lengthOfSubArray = Number.MAX_VALUE;
var updateArrayIndex = 0;

for(let i=0; i<arr.length; i++) {
    curr_sum = curr_sum + arr[i]; //1

//To handle negative numbers
if(curr_sum <= 0) {
updateArrayIndex = i;
curr_sum = 0;
}

//Sum becomes unstable if it becomes more than the number
while(curr_sum > number && updateArrayIndex <= i) {

//Update result if curr_sum's length is more than the minimum we found
lengthOfSubArray = Math.min(lengthOfSubArray, i-updateArrayIndex+1);

//removes elements from the left side till it becomes stable again
curr_sum = curr_sum - arr[updateArrayIndex];
updateArrayIndex++;
    }
  }
   return lengthOfSubArray;
}



// var arr = [1,2,3,4,5,6,7,8];
var arr = [1, 4, 45, 6, 0, 19];
var number = 51;
var lengthOfSubArray = minSubArray(arr, number);



if(lengthOfSubArray != Number.MAX_VALUE)
console.log(`smallest subArray length is: ${lengthOfSubArray}`);
else
console.log("This subArray doesn't exist");

