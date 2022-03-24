class Node {
    next; 
    value; 

    constructor(value, nextNode) {
      this.value = value;
      this.next = nextNode || null;
    }
  }
  
  class List {
    root;
  
    constructor(rootValue) {
      this.root = new Node(rootValue);
    }
  
    addNode(value, i) {
  
      let count = 0;
      const findNode = (node, i) => {
       // console.log('find node', index, 'count -', count);
        if (node.next && ((count < i) || !i)) {
          count++;
          return findNode(node.next, i);
        } else {
          return node;
        }
      }
  
      const foundNode = findNode(this.root, i);
  
      if (i !== undefined) {
        const previousNode = findNode(this.root, i - 1);
        // previousNode.next = new Node(value, foundNode);
  
        console.log('foundNode', i, ' found:', foundNode, 'prev: ', previousNode);
  
      } else {
        foundNode.next = new Node(value);
      }
  
    }
  
  }
  
  const listObj = new List(0);
  listObj.addNode(1111);
  listObj.addNode(2222);
  listObj.addNode(3333);
  listObj.addNode(4444);
  listObj.addNode(5555, 2);
  
  console.log('list 2', listObj.root.next.next);
  console.log('list 3', listObj.root.next.next.next);
  console.log('list 4', listObj.root.next.next.next.next);