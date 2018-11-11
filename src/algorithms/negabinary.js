/**
 * Given a decimal number, write a function that returns its negabinary (i.e. negative 2-base) representation as a string.
 * (-15) ==	'110001'
 * (2) == '110'
 * (13) == '11101'
 */
negabinary = num => {
    if(isNaN(num))
        return 'not a number!';

    var nega = [],
        remainder,
        base = -2;
    while(num !== 0) {
        remainder = num % base;
        num = Math.ceil(num / base);
        console.log(remainder)
        nega.push(remainder > 0 ? remainder : -remainder)
    }
    return nega.reverse().join('');
}

console.log('-15: ', negabinary(-15), '  2: ', negabinary(2), '  13: ', negabinary(13));