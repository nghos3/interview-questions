// 2. Write code to flat out the given array - ['a',1,'c',5, [1,2,3,[4,5,6],{'x':'x','y':'y'}],{'p':'p','q':{'l':'l', 'm':'m'}},[['b',10,[20,[30,40,50]]]]];


   const flattern = (n, result= []) => {
       if(n.length > 0 && typeof n === 'object' ) {
           const temp = n.pop();
           if(temp && temp.length ) {
               // console.log(temp
             flattern(temp, result);
           } else {
               // console.log(temp);
               result.push(temp);
           }

        flattern(n, result);
       }

       console.log(result);
       return result;
   }


flattern(['a',1,'c',5, [1,2,3,[4,5,6],{'x':'x','y':'y'}],{'p':'p','q':{'l':'l', 'm':'m'}},[['b',10,[20,[30,40,50]]]]]);