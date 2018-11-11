// all possible subset of set size of n

const backtrack = (list: Array<number>, solution: Array<number>) => {
    if(isSolution(list, solution)) {
        return;
    }
    var candidate = generateCandidate();
    candidate.forEach(cand => {
        var l = {...solution};
        //l.push(cand);
        backtrack(list, l);
    });
}

const generateCandidate = () => {
    return [true, false];
}

const isSolution = (l:Array<number>, s:Array<number>) => {
    if(l.length === s.length) {
        printSolution(s, l);
        return true;
    }
    return false;
}

const printSolution = (solution: Array<number>, list: Array<number>) => {
    var t = [];
    for(var i = 0; i < solution.length; i++) {
        if(solution[i]) {
            t.push(list[i]);
        }
    }
    console.log(t);
}

backtrack([1, 2, 3], []);

