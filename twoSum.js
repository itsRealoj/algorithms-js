function twoSum(sumArray, sum) {
let newArray = [];
for(i=1; i<=sumArray.length; i++) {
 let tempVar = sumArray[i];
 sumArray.forEach(val => {
  if(val + tempVar === sum) newArray.push([val, tempVar]);
  else console.log('something went wrong!');
 })
}
console.log(newArray);
return;
} 
twoSum([2, 1, 4, 5, 3], 5);
