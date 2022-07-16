// Write a method that accepts a string as input and prints how many times each letter of the alphabet appears in the string. The method should be case insensitive. Additionally, the method should not print letters that do not appear in the string. 


// For example, the following input: CountLetters(“Collins”)
// Should produce the following output.
// c:1
// i:1
// l:2.  // obj[c] += 1
// o:1
// n:1
// s:1


const countLetters = (str) => {
    const obj = {};
 
     for(let i = 0; i < str.length; i++) {
         if(!obj[str[i]]) {
             obj[str[i]]= 1
         } else {
            obj[str[i]] +=1;
         }
     }
 
     console.log(obj);
 } 
 
 countLetters('Collins');