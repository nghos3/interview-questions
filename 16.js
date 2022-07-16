const a= [1,2,3,4];


function rev(arr) {
    const noOfIteration = arr.length/2 === 0 ? arr.length/2 : (arr.length-1)/2;
    for (let i =0; i < noOfIteration; i++) {
        const first = arr[i];
        arr[i] = arr[arr.length-1 -i];
        arr[arr.length-1 -i]= first;
    }

    console.log(arr);
    return arr;
}

rev(a);

