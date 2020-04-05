function ceasarCipher(str, num) {
 let lowerCaseString = str.toLowerCase();
 let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
 let newString = '';

 for(let i = 0; i < lowerCaseString.length; i++) {
  let currentLetter = lowerCaseString[i];
  if(currentLetter === '') {
   newString += currentLetter;
   continue;
  }
  let currentIndex = alphabet.indexOf(currentLetter); 
  let newIndex = currentIndex + num;
  if(newIndex > 25) newIndex = newIndex - 26;
  if(newIndex < 0) newIndex = 26 + newIndex;
  if(str[i] === str[i].toUpperCase()) {
   newString += alphabet[newIndex].toUpperCase();
  }
  else newString += alphabet[newIndex];
 }

 return newString;
}
ceasarCipher('password is m', 5);
