/**
 * Given some time output the time after one second.
 * Example
 * For currentTime = [23, 59, 59], the output should be
 * nextSecond(currentTime) = [0, 0, 0].
 */
function nextSecond(currentTime) {
    var t = [0, 0, 0]
    if(currentTime[2] + 1 == 60) {
        t[2] = 0;
        if(currentTime[1] + 1 == 60) {
            t[1] = 0;
            if(currentTime[0] + 1 == 24) {
                t[1] = 0;
                t[0] = 0;
                t[2] = 0;
            }else {
                t[0] = currentTime[0] + 1;
                t[1] = 0;
                t[2] = 0;
            }
        }else {
            t[1] = currentTime[1] + 1;
            t[0] = currentTime[0]
        }
    }else {
         t[2] = currentTime[2] + 1;
        t[1] = currentTime[1];
        t[0] = currentTime[0];
    }
    return t;
}