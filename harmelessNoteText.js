function harmlessNote(noteText, magazineText) {
 let noteArr = noteText.split(' ');
 let magazineArr = magazineText.split(' ');
 let magazineObj = {};

 magazineArr.forEach(function(word) {
   if(!magazineObj[word]){
     magazineObj[word] = 0;
    } 
   magazineObj[word] += 1;
 });

let noteIsPossible = true;
noteArr.forEach(word => {
 if(magazineObj[word]){
   magazineObj[word]--;
    if(magazineObj[word] < 0) noteIsPossible = false;
 }
   else noteIsPossible = false;
})

return (`Note is ${noteIsPossible}`);
};
harmlessNote("is is is good", "is home good is");

