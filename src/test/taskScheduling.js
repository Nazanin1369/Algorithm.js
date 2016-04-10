/**
 * Input: Four Jobs with following deadlines and profits
  JobID    Deadline      Profit
    a        4            20
    b        1            10
    c        1            40
    d        1            30
 * Output: Following is maximum profit sequence of jobs: c, a
 */

function scheduleJobs(jobs) {
    //sort jobs on profit decreasing
    jobs.sort(function(a, b) {
           return b.profit - a.profit;
    });
    var elapsedTime = 0;
    var ran = [];

    for(var i = 0; i < jobs.length; i++) {
        if(ran.indexOf(jobs[i]) === -1 && jobs[i].deadline > elapsedTime) {
            elapsedTime += jobs[i].deadline;
            ran.push(jobs[i]);
        }
    }
    return ran;
}


var jobs = [
    {
        id: 'a',
        deadline: 4,
        profit: 20
    },
    {
        id: 'b',
        deadline: 1,
        profit: 10
    },
    {
        id: 'c',
        deadline: 1,
        profit: 40
    },
    {
        id: 'd',
        deadline: 1,
        profit: 30
    }
];

scheduleJobs(jobs);
