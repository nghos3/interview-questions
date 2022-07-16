function calculator (){
    let count = 0;
    this.add = function (ad){
        count = count+ ad;
        return this
    }

    this.multiply = function(mul){
        count = count*mul;
        return this
    }

    this.substract = function(sub){
        count = count-sub;
        return this
    }

    this.devide = function(dev){
        count = count/dev;
        return this
    }

    this.total = function(){
        return count;
    }
}

const calc = new calculator();


calc.add(30).add(10).multiply(40).substract(30).devide(10);

console.log(calc.total());