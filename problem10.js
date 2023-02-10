//Reverse Vowels of a String


/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vow=[];
for(let i=0;i<s.length;i++){
    if(s[i]=='a' || s[i]=='e' ||s[i]=='i' || s[i]=='o' || s[i]=='u' ||s[i]=='A' ||s[i]=='E'||s[i]=="I"||s[i]=='O'||s[i]=='U'){
    vow.push(s[i]);
    }
    }
  vow=vow.reverse();
    
let k=0;
s=s.split("")
for(let i=0;i<s.length;i++){
    if(s[i]=='a' || s[i]=='e' ||s[i]=='i' || s[i]=='o' || s[i]=='u'||s[i]=='A' ||s[i]=='E'||s[i]=="I"||s[i]=='O'||s[i]=='U'){
        
    s[i]=vow[k]
    k++
    }
    }
    
return s.join("");
};
