//Valid Palindrome

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
let news=[];

for(let i=0;i<s.length;i++){
    if((s[i]>='a' && s[i]<='z') || (s[i]>='A' && s[i]<='Z' ||  (parseInt(s[i])>=0&& parseInt(s[i])<=9))){
        news.push(s[i].toLowerCase());
    }
}

if(news.join("")==news.reverse().join("") ){
    return true
}
else{
    return false
}
    
};
