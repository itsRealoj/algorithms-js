//function to calculate mean
function getMean(array) {
 let sum = 0;

 array.forEach(num => {
  sum += num; 
 });  
 let mean = sum/arr.length;
 return mean;
}

//function to calculate median
function getMedian(array) {
 //sort the array
 array.sort(function(a, b) {return a - b});
 let median;

 //find median
 if(array.length % 2 !== 0) {
   median = array[Math.floor(array.length / 2)];
 }
 else {
  let mid1 = array[(array.length / 2) - 1];
  let mid2 = array[array.length / 2];
  median = (mid1 + mid2) / 2;
 }
return median;
}

// function to calculate mode 
function getMode(array) {
 let arrayObject = {};
 array.forEach(val => {
  if(!arrayObject.val) {
   arrayObject.val = 0;
  }
 })
}

//return all the calculation in an object
function meanMedianMode(array) {
 return {
  mean: getMean,
  mode: getMode,
  median: getMedian,
 }
}
