var _ = require('underscore')


var A = ['C', 'D', 'E', 'F', 'G'],
    B = [3, 0, 4, 1, 2]
    C = [];

_.each(A, function(letter, index) {
   C[B[index]] = letter;
});
//console.log(C);


//*******************************************

var boeadingPasses = [
    {
        source: 'C',
        destination: 'D'
    },
    {
        source: 'A',
        destination: 'B'
    },
    {
        source: 'D',
        destination: 'E'
    },
    {
        source: 'B',
        destination: 'C'
    }
];

function findSouceAndDestination() {
    var sourceMap = {};
    var destMap = {};
    while(boeadingPasses.length !== 0) {
        var pass = boeadingPasses.pop();

        if(!sourceMap[pass.source]) {
            sourceMap[pass.source] = true;
        }

        if(!destMap[pass.destination]) {
            destMap[pass.destination] = true;
        }

        if(sourceMap[pass.destination]) {
             delete(sourceMap[pass.destination]);
             delete(destMap[pass.destination]);
        }

        if(destMap[pass.source]) {
             delete(destMap[pass.source]);
             delete(sourceMap[pass.source]);
        }
    }
    return {'from': sourceMap, 'to': destMap};
}

//console.log(findSouceAndDestination());


//***********************************



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


//**********************************


var JD = {};

JD.debounce = function(func, wait, immediate) {

}