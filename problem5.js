//Number of Segments in a String



/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    
 let k=s.split(" ");
let len=0;
for(let i=0;i<k.length;i++){
    if(k[i]!=''){
        len++;
    }
}
return len;
    
};
