//Detect Capital

/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let sm=0;
let ca=0;

for(let i=0;i<word.length;i++){
   if(word[i].toLowerCase()==word[i]){
    sm++;
   }
   else{
    ca++;
   }
}

 if((word[0].toUpperCase()==word[0] && ca==1) || ca==0 ||sm==0){
    return true
}
else {
    return false
}
};
