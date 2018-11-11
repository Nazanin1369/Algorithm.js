
function isNumber(st) {
    for(var i = 0; i < st.length; i++) {
        var c = st.charAt(i);
        if(!((c >= 0 && c <=9) || (c === '.' && i > 0))) {
            return false;
        }
    }
    return true;
 }

console.log(isNumber('38.9'));