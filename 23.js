'use strict';
(function(){
  var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined')); // "a defined? false" 
console.log("b defined? " + (typeof b !== 'undefined')); // "b defined? true"


let parent = () => {
  let a = 10;
  let child = () => {
    console.log(a);
  }
  
  return child;
};

const x = parent();

x();

console.log(0.1 + 0.2); // 0.30000000004
console.log(0.1 + 0.2 === 0.3); false 

function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
  {
      bar: "hello"
  };
}

console.log("foo1 returns:");  //foo1 returns:  { bar: "hello"}
console.log(foo1());
console.log("foo2 returns:"); // foo2 undefined
console.log(foo2()); 

var a=10
var b =20;

(function() {
    console.log(1);
    setTimeout(function(){console.log(2)}, 1000); 
    setTimeout(function(){console.log(3)}, 0); 
    console.log(4);
})();

console.log(1 +  "2" + "2");  // 122
console.log(1 +  +"2" + "2");// 1undefined22//1+2=3+2=32
console.log(1 +  -"1" + "2");c// 1-1=0+2=02
console.log(+"1" +  "1" + "2"); // 112
console.log( "A" - "B" + "2");// NAN2
console.log( "A" - "B" + 2); //NAN


// 1 4 3 2
