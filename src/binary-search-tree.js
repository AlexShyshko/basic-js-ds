const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
module.exports = class BinarySearchTree {

  constructor() {
    this.rootOfTree = null;
  }
  
  root() {
    return this.rootOfTree;
  }

  add(data) {
    this.rootOfTree = addNode(this.rootOfTree, data);

    function addNode(node, data) {
      if (node === null) {
        return new Node(data);
      } else if (node.data === data) {
        return node;
      } else if (data < node.data) {
        node.left = addNode(node.left, data);
      } else {
        node.right = addNode(node.right, data);
      }

      return node;
    }
  }

  searchNode(node, data) {
    if (node === null) {
      return null;
    } else if (node.data === data) {
      return node;
    } else if (data < node.data) {
      return this.searchNode(node.left, data);
    }  else {
      return this.searchNode(node.right, data);
    } 
  }

  has(data) {
    if (this.searchNode(this.rootOfTree, data) === null) {
      return false;
    } else {
      return true;
    }
  }

  find(data) {
    return this.searchNode(this.rootOfTree, data);
  }

  removeNode(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    }  else {
      if (node.left === null & node.right === null) {
        return null;
      } else if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      } else {
        let minFromRight = node.right;

        while (minFromRight.left !== null) {
          minFromRight = minFromRight.left;
        }

        node.data = minFromRight.data;
        node.right = this.removeNode(node.right, minFromRight.data);
        return node;
      }
    } 
  }

  remove(data) {
    this.rootOfTree = this.removeNode(this.rootOfTree, data)
  }

  min() {
    if (this.rootOfTree === null) {
      return null;
    } else {
      while (this.rootOfTree.left !== null) {
        this.rootOfTree = this.rootOfTree.left;
      }

      return this.rootOfTree.data;
    }
  }

  max() {
    if (this.rootOfTree === null) {
      return null;
    } else {
      while (this.rootOfTree.right !== null) {
        this.rootOfTree = this.rootOfTree.right;
      }

      return this.rootOfTree.data;
    }
  }

}