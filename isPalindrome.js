function isPalindrome(string) {
string = string.toLowerCase();
let stringArr = string.split('');
let validChars = 'abcdefghijklmnopqrstuvwxyz'.split('');

let newStringArr = [];
stringArr.forEach(char => {
 if(validChars.indexOf(char) > -1) newStringArr.push(char);
  else console.log(newStringArr);
 });
}
