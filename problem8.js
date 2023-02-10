//Student Attendance Record I


/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
let A=0;
let L=0;
for(let i=0;i<s.length;i++){
    if(L==3){
        break;
    }
    if(s[i]=='A'){
        L=0;
    A++;
    }
    else if(s[i]=='L'){
        L++;
    }
    else{
        L=0;
    }
}
if( A<2 && !(L>=3)){
    return true
}
else{
    return false
}
};
