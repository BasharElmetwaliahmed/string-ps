//Maximum Number of Words Found in Sentences

var mostWordsFound = function(sentences) {
    let max=0;
for(let i=0;i<sentences.length;i++){
    currentsen=sentences[i].split(" ").length;
    if(currentsen>=max){
        max=currentsen;
    }
}
return max;
    
};
