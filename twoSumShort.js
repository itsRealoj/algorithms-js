function twoSum(numArray, sum) {
 let pairs = [];
 let hashtable = [];

 for (let i =0; i< numArray.length; i++) {
  let currNum = numArray[i];
  let counterpart = sum - currNum;

  if(hashtable.indexOf(counterpart) !== -1) {
   pairs.push([ currNum, counterpart ]);
  }
  else hashtable.push(currNum);
 }
 return pairs;
}

twoSum([4, 6, 3, 2, 1], 7);
