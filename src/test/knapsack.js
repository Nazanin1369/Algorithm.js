/**
 * Knapsack
 */
backpack = (i, M, w, p) => {
    d = Array(M+1).fill(i=0)
    d[M]=1
    for(x of w) {
        for(y in d)
            if(x<=M && d[x++]) d[y]=Math.max(d[y],d[x-1]+p[i])
        i++
    }
    return d[0]-1
}