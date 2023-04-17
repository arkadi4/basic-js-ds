// const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor() {
    // this.left = null;
    // this.right = null;
    this.rootNode = null;
  }
  root() {
    // console.log('this.rootNode', this.rootNode)
    return this.rootNode
  }
  
  add( data ) {

    const addData = function (node, data) {
      if (!node) return new Node(data);
      if (node.data === data) return node;
      if (node.data > data) {
        node.left = addData(node.left, data);
        console.log('node.left', node.left)
      } else node.right = addData(node.right, data);
      return node;
    };
    this.rootNode = addData(this.rootNode, data);
  }

  

  has( data ) {
    const hasData = function (node, data) {
      if (!node) return false;
      if (node.data === data) return true;
      if (node.data > data) return hasData(node.left, data);
      console.log('node.data', node.data)
      console.log('node.left', node.left)
      if (node.data < data) return hasData(node.right, data);
    };
    return hasData(this.rootNode, data);
  }

  find( data ) {
    const findData = function (node, data) {
      if (!node) return null;
      if (node.data === data) return node;
      if (node.data > data) {
        return findData(node.left, data);
      } else return findData(node.right, data);
    };
    return findData(this.rootNode, data);
  }

//   remove( data ) {

//   }

  min() {
    if (!this.root) return false;
    let node = this.rootNode;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.root) return false;
    let node = this.rootNode;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}
// const tree = new BinarySearchTree();
// tree.root();
// tree.add(5);
// tree.add(3);
// tree.add(7);
// tree.add(9);
// tree.root();


module.exports = {
  BinarySearchTree
};