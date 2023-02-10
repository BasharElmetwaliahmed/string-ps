//Defanging an IP Address



/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    address=address.split("")
for(let i=0;i<address.length;i++){
    if(address[i]=='.'){
            let k=[address[i]];

     k.push(']');
        k.unshift('[');
            address[i]=k.join('');

    }
}
return address.join("")
    
};
