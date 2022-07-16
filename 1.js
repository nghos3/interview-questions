// give example of promises


console.log('this');
let P = new Promise((resolve, reject) => {
    let a = 1+3;
    if (a == 2) {
        resolve('success')
    } else {
        resolve('Failed')
    }
})

P.then((message) => { console.log('this is in the then'+message)}).catch((message)=> {
    console.log('this is in the catch'+message)
});
