function revArray(arr){
 let revArr = [];
 for(i = arr.length; i>=0; i--){
  revArr.push(arr[i])
 }
console.log(revArr);
return;
}
revArray([3,5,6,4]);
