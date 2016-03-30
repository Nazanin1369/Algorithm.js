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

console.log(findSouceAndDestination());