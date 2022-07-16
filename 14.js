let strs = '343355533388535333';

const MostFrequentLeastFrequent = (str) => {
    const obj = {};
    let maxCount = 0;
    let minCount = 9999;

    for(let i =0; i < str.length; i++) {
        if(!obj[str[i]]) {
            obj[str[i]] = 1;
        } else {
            obj[str[i]] += 1
        }

        if(obj[str[i]] > maxCount) {
            maxCount = obj[str[i]];
        }
    }

    return obj;
}


console.log(MostFrequentLeastFrequent(strs));
