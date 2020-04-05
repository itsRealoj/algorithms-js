function ceasarCipher(string, num) {
 let stringArr = string.split('');
 let allChars = 'abcdefghijklmnopqrstuvwxyz'.split('');

//creating pure string
 let hashedString = [];
 stringArr.forEach(char => {
  if(allChars.indexOf(char) > -1) {
   let newCharIndex = allChars.indexOf(char) - num;
   hashedString.push(allChars[newCharIndex])
  }
 })
console.log(hashedString);
}
ceasarCipher('noo keeper', 1);
