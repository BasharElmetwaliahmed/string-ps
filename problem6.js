//Length of Last Word



/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let k = s.split(" ");
    let lenLast=0;
for(let i=0;i<k.length;i++){
    if(k[i]!=""){
        lenLast=k[i].length;
    }
    
}
return lenLast
    
};
