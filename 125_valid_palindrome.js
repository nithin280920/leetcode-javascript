const isPalindrome = (s) => {
    s = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    let t = '';

    for(let i = 0; i < s.length; i++){
        t += s[s.length-1-i];
    }
    return s === t ? true : false;
    
    // return s === s.split('').reverse().join('');
    
};