function InversionsNumber(n, a0, a1, m) {
    var arr = [];
    var mergeAndCount, sortAndCount;
    arr[0] = a0;
    arr[1] = a1;
    for(var i = 2; i < n; i++) {
        arr[i] = (arr[i - 1] + arr[i - 2]) % m;
    }



/*
the merging routine
@param List1 the first list to be merged
@param List2 the second list to be merged
*/

mergeAndCount = function(List1, List2) {
  //List1 = List1.slice();
  //List2 = List2.slice();
  var count = 0;
  var outputList = [];

  while (List1.length > 0 && List2.length > 0) {
    outputList.push(Math.min(List1[0], List2[0]));
    if (List2[0] < List1[0]) {
      count += List1.length;
      List2.shift();
    } else {
      List1.shift();
    }
  }
  outputList = outputList.concat(List1.concat(List2));
  return {
    'count': count,
    'list': outputList
  };
};

/*
count inversion algorithm
@param List the sequence to be sorted
*/
sortAndCount = function(List) {
  //List = List.slice();
  var List1, List2, mergeOut, output1, output2;
  if (List.length < 2) {
    return {
      'count': 0,
      'list': List
    };
  } else {
    List1 = List.splice(0, Math.floor(List.length / 2));
    console.log(List)
    List2 = List;
    output1 = sortAndCount(List1);
    output2 = sortAndCount(List2);
    mergeOut = mergeAndCount(output1.list, output2.list);
    return {
      'count': output1.count + output2.count + mergeOut.count,
      'list': mergeOut.list
    };
  }
};

return sortAndCount(arr).count;
}

console.log(InversionsNumber(5,2,1,5));
