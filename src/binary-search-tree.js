const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

class BinarySearchTree {
  constructor(){
    this.tree = null;
  }

  root() {
    return this.tree;
  }

  add(data) {
    this.tree = addWithin(this.tree, data);

    function addWithin(node, data) {
      if(!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    return hasNode(this.tree, data);

    function hasNode (node, data) {
      if(!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      return data < node.data ? hasNode(node.left, data) : hasNode(node.right, data);
    }
  }

  find(data) {
    return findNode(this.tree, data);

    function findNode(node, data) {
      if(!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
      return data < node.data ?
        findNode(node.left, data) :
        findNode(node.right, data);
    }
  }

  remove(data) {
    this.tree = this.removeNode(this.tree, data);
  }
  removeNode(node, data) {
    if(!node) {
      return null;
    }
    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (node.data < data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      if (!node.left && !node.right) {
        return null
      }

      if (!node.left) {
        node = node.right;
        return node;
      }

      if (!node.right) {
        node = node.left;
        return node;
      }

      let maxOFLeft = node.left;
      while(maxOFLeft.right) {
        maxOFLeft = maxOFLeft.right;
      }
      node.data = maxOFLeft.data;

      node.left = this.removeNode(node.left, maxOFLeft.data);

      return node;
    }
  }

  min() {
    if(!this.tree) {
      return;
    }

    let minimalsNode = this.tree;
    while (minimalsNode.left) {
      minimalsNode = minimalsNode.left;
    }

    return minimalsNode.data;
  }

  max() {
    if(!this.tree) {
      return;
    }

    let maximumsNode = this.tree;
    while (maximumsNode.right) {
      maximumsNode = maximumsNode.right;
    }

    return maximumsNode.data;
  }
}

module.exports = {
  BinarySearchTree,
};