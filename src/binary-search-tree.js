const {
  NotImplementedError
} = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
module.exports = class BinarySearchTree {

  constructor() {
    this.root1 = null;
  }
  root() {
    return this.root1;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.root1) {
      this.root1 = newNode;
      return;
    }

    let currentNode = this.root1;
    while (currentNode) {
      if (newNode.data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }

  has( /* data */ ) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find( /* data */ ) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove( /* data */ ) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

}
class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}