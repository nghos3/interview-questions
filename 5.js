// roman to number

let romanToInt = function(s) {
    const Romans = {
        "I": 1, 
        "V": 5 , 
        "X":10,
        "L":50,
        "C":100,
        "D":500 ,
        "M":1000
    };
    
    let total = 0;
    for(let index=0 ; index < s.length; index++) {
        if((index< s.length-1) && (Romans[s[index]] < Romans[s[parseInt(index)+1]])) {
                total += Romans[s[parseInt(index)+1]] - Romans[s[index]];
                index++;
        } else {
                total += Romans[s[index]];
            }
    }
    
    return total;
};


romanToInt("MCMXCIV");