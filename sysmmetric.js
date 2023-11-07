/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

class Node {

constructor(item)
{
    this.key = item;
    this.left = null;
    this.right = null;
}
}

let root = null;

function isMirror(node1, node2){

    if(node1.key === null || node2.key === null) {
        return 
    }
    if(node1.key !== null || node2.key !== null && node1.key == node2.key){
        console.log("node1.left, node2.right",node1.left, node2.right,node1.right, node2.left)
        return (isMirror(node1.left, node2.right) && isMirror(node1.right, node2.left))
    }
    return false;
}

function isSymmetric() {
    console.log("root",root)
    return isMirror(root,root);
}

// [1,2,2,null,3,null,3]
root = new Node(1);
root.left = new Node(2);
root.right = new Node(2);
root.left.left = new Node(null);
root.right.right = new Node(3);
root.left.right = new Node(null);
root.right.left = new Node(3);

let output = isSymmetric();
console.log("output",output)
if (output == true ) {
    console.log("Symetric");
}else{
    console.log("Not Symetric");
}