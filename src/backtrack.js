// all possible subset of set size of n
var _ = require('underscore');

function backtrack(list, solution) {
    if(isSolution(list, solution)) {
        return;
    }
    var candidate = generateCandidate();
    _.each(candidate, function(cand) {
        var l = _.clone(solution);
        l.push(cand);
        backtrack(list, l);
    });
}

function generateCandidate() {
    return [true, false];
}

function isSolution(l, s) {
    if(l.length === s.length) {
        print(s, l);
        return true;
    }
    return false;
}

function print(solution, list) {
    var t = [];
    for(var i = 0; i < solution.length; i++) {
        if(solution[i]) {
            t.push(list[i]);
        }
    }
    console.log(t);
}
backtrack([1, 2, 3], []);

