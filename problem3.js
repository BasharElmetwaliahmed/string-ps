// Count the Number of Consistent Strings


/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let setallow=new Set(allowed)
let x=0;
for(let i=0;i<words.length;i++){
    if(words[i].split('').every(letter=>setallow.has(letter))){
        x++;
    }
}
return x;
    
};
