var maximumUnits = function(boxTypes, truckSize) {
  let totalUnits = 0;
  boxTypes = boxTypes.sort((a,b) => {return(b[1]-a[1])});
  for(let i = 0, j = 0; i < truckSize && j < boxTypes.length ; j++) {
      if((i + boxTypes[j][0]) <= truckSize) {
          totalUnits += boxTypes[j][0]*boxTypes[j][1];
          i+= boxTypes[j][0];
      } else {
         let rem =  truckSize - i ;
          if(rem > 0) {
              totalUnits += rem*boxTypes[j][1]; 
            return totalUnits;
          }
        }
     }
  return totalUnits;
};

console.log(maximumUnits([[1,3],[5,5],[2,5],[4,2],[4,1],[3,1],[2,2],[1,3],[2,5],[3,2]],35));