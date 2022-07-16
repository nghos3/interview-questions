// what is curring with example
let conc = (a) => (b) => {

    if (b) {  
        return conc(a+b);
    }
    return a;
    
}

const gg = conc(3)(4)(5)(6);
console.log(gg());