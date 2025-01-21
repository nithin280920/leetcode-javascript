const isSubsequence = function(s, t) {
    let sIndex = 0;
    let tIndex = 0;

    while(tIndex < t.length){
        if(s[sIndex] === t[tIndex]){
            sIndex++
        }
        tIndex++;
    }
return sIndex === s.length;
};


let s = "abc", t = "ahgdcb"

console.log(isSubsequence(s, t));
