/**
Given a binary tree, return the zigzag level order traversal of its nodes' values. 
(ie, from left to right, then right to left for the next level and alternate between).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
   
return its zigzag level order traversal as:

[
  [3],
  [20,9],
  [15,7]
]
====
VIDEO EXPLANATION =  https://www.youtube.com/watch?v=4u--XDffIZM
====
**/

this.left = null;
this.right = null;

var zigzagLevelOrder = function(root) {
    let results = [];
    const lot = (root, level) => {
        if(!root) return;
        // console.log(root.next().value)
        var iterator = root.values();
        console.log(iterator, iterator.next().value)
        // All the elements of the array the array
        // is being printed.
        console.log(results[level]);
        if(results[level]) 
            results[level].push(root[level]);
        else results[level] = [root[level]];
        console.log(results[level])
        
        console.log(root.left, level+1);
        lot(root.left, level+1);
        lot(root.right, level+1);
    }
    lot(root, 0);
    return results.map((b,i)=>(i%2) ? b.reverse(): b);
};

console.log(zigzagLevelOrder([3,9,20,null,null,15,7]));
