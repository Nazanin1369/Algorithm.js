/**
 * Given the root of a binary tree containing integers, print the columns of the tree in order with the nodes in each column printed top-to-bottom.
 * Input:
      6
     / \
    3   4
   / \   \
  5   1   0
 / \     /
9   2   8
     \
      7
Output:
9 5 3 2 6 1 7 4 8 0
Input:
       1
     /   \
    2     3
   / \   / \
  4   5 6   7

When two nodes share the same position (e.g. 5 and 6), they may be printed in either order:
Output:
4 2 1 5 6 3 7
or:
4 2 1 6 5 3 7
 */

function Node(value) {
    this.left = null;
    this.right = null;
    this.value = value;
    return this;

}

 var columns = {};
function printColumns(root, start) {

   if( columns[start] !== undefined) {
       columns[start].push(root.value)
    } else {
         columns[start] = [root.value];
    }

    if(root.left !== null) {
        printColumns(root.left, start - 1)
    }

    if(root.right !== null) {
        printColumns(root.right, start + 1)
    }

}



var one = new Node(1);
var two  = new Node(2);
var three  = new Node(3);
var four  = new Node(4);
var five  = new Node(5);
var six  = new Node(6);
var seven  = new Node(7);

one.left = two;
one.right = three;
two.left = four;
two.right = five;
three.left = six;
three.right = seven;

printColumns(one, 0)
var res = '';
var keys = Object.keys(columns).sort(function (a, b) {
  return a - b
});
for(var i = 0; i < keys.length; i++) {
    res += columns[keys[i]].toString().replace(',\g', ' ');
}

console.log(res)

