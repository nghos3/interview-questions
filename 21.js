const pallin = "A Santa at Nasa1";

const checkPallindrome = (str) => {
    let processedStr = str.replaceAll(' ', '');
        processedStr = processedStr.toLowerCase();
     // let reverse = processedStr.reverse();
    // for(i = processedStr.length-1; i >= 0; i--) {
    //     reverse.push(processedStr[i]);
    //     // console.log(processedStr[i]);
    // }

    // reverse = reverse.join('');
    if(reverse === processedStr) {
        console.log(true);
    } else {
        console.log(false);
    }
    // console.log(processedStr, str, reverse);
}

checkPallindrome(pallin);