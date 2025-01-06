const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rooT = null;
  }

  root() {
    return this.rooT;
  }
  add(data) {
    this.rooT = addNode(this.rooT, data);
    function addNode(node, data) {
      if (!node) return new Node(data);
      if (!node.data === data) return node;
      if (data < node.data) {
        node.left = addNode(node.left, data);
      } else {
        node.right = addNode(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return searchNode(this.rooT, data);
    function searchNode(node, data) {
      if (!node) return false;
      if (node.data === data) return true;
      if (data < node.data) {
        return searchNode(node.left, data);
      } else {
        return searchNode(node.right, data);
      }
    }
  }

  find(data) {
    let correnNode = this.rooT;
    while (correnNode) {
      if (data === correnNode.data) {
        return correnNode;
      }
      if (data < correnNode.data) {
        correnNode = correnNode.left;
      } else {
        correnNode = correnNode.right;
      }
    }
    return null;
  }

  remove(data) {
    this.rooT = removeNode(this.rooT, data);
    function removeNode(node, data) {
      if (!node) return false;
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) return null;
        if (!node.left) {
          return (node = node.right);
        }
        if (!node.right) {
          return (node = node.left);
        }
        let oneNode = node.right;
        while (oneNode.left) {
          oneNode = oneNode.left;
        }
        node.data = oneNode.data;
        node.right = removeNode(node.right, oneNode.data);
        return node;
      }
    }
  }

  min() {
    if (!this.rooT) return;
    let correnNode = this.rooT;
    while (correnNode.left) {
      correnNode = correnNode.left;
    }
    return correnNode.data;
  }

  max() {
    let correnNode = test.rooT;
    if (!correnNode) return;
    while (correnNode.right) {
      correnNode = correnNode.rightl;
    }
    return correnNode.data;
  }
}

module.exports = {
  BinarySearchTree,
};
