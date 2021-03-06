console.log(flatten([1,undefined,[2,[3]],[4]])); // => [1,undefined,2,3,4]

//O(n)
function flatten(arr) {

  var result = [];
  var toStringFn = Object.prototype.toString;
  var nodes = arr && arr.slice();
  var node;

  if(!arr.length) {
    return result;
  }


  while (nodes.length) {

    node = nodes.pop();
    if(toStringFn.call(node) === '[object Array]') {
      nodes.push.apply(nodes, node);
    } else {
      result.push(node);
    }

  }

  result.reverse();
  return result;
}
// result = [1,undefined,3,2]  2,3,undefined,1



// Recursive Solution
var faltten = function (arr, items) {
    var items = [];
    if(String.prototype.toString.call(arr) !== '[object Array]') {
        items.push(arr);
    }
    for(var x in arr) {
        flatten(arr[x], items);
    }
    return items;
}