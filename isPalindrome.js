function isPalindrome(string) {
string = string.toLowerCase();
let stringArr = string.split('');
let validChars = 'abcdefghijklmnopqrstuvwxyz'.split('');

//filter the input string
let newStringArr = [];
stringArr.forEach(char => {
 if(validChars.indexOf(char) > -1) newStringArr.push(char);
  else console.log(newStringArr);
 });

//doing the compaprison
if (newStringArr.join('') === newStringArr.reverse().join('')) console.log('You got a Palindrome !');
else console.log('nothing near a Palindrome!');
}
         
isPalindrome('r;ace car');
