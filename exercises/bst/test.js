const { Node, BST } = require('./index');

test('Node and BST are constructors', () => {
  expect(typeof Node.prototype.constructor).toEqual('function');
  expect(typeof BST.prototype.constructor).toEqual('function');
});

test('Node can insert correctly', () => {
  const root = new Node(10);
  const bst = new BST(root);

  bst.insert(5);
  bst.insert(15);
  bst.insert(17);

  expect(root.left.data).toEqual(5);
  expect(root.right.data).toEqual(15);
  expect(root.right.right.data).toEqual(17);
});

test('Node can also insert correctly', () => {
  const root = new Node(10);
  const bst = new BST(root);

  bst.insert(5);
  bst.insert(15);
  bst.insert(17);
  bst.insert(9);
  bst.insert(8);
  bst.insert(11);
  bst.insert(12);
  bst.insert(14);
  bst.insert(13);

  expect(root.left.data).toEqual(5);
  expect(root.left.right.data).toEqual(9);
  expect(root.left.right.left.data).toEqual(8);
  expect(root.right.data).toEqual(15);
  expect(root.right.left.data).toEqual(11);
  expect(root.right.left.right.data).toEqual(12);
  expect(root.right.left.right.right.data).toEqual(14);
  expect(root.right.left.right.right.left.data).toEqual(13);
  expect(root.right.right.data).toEqual(17);
});

test('Contains returns root with the same data', () => {
  const root = new Node(10);
  const bst = new BST(root);

  bst.insert(5);
  bst.insert(15);
  bst.insert(20);
  bst.insert(0);
  bst.insert(-5);
  bst.insert(3);

  const three = root.left.left.right;
  expect(bst.contains(3)).toEqual(three);
});

test('Contains returns null if value not found', () => {
  const root = new Node(10);
  const bst = new BST(root);

  bst.insert(5);
  bst.insert(15);
  bst.insert(20);
  bst.insert(0);
  bst.insert(-5);
  bst.insert(3);

  expect(bst.contains(9999)).toEqual(null);
});

test('Inorder traverse is correct', () => {
  const root = new Node(20);
  const bst = new BST(root);

  bst.insert(5);
  bst.insert(9);
  bst.insert(11);
  bst.insert(12);
  bst.insert(25);
  bst.insert(14);

  expect(bst.traverseInOrder()).toEqual([5,9,11,12,14,20,25]);
});


test('Inorder successor is correct', () => {
  const root = new Node(20);
  const bst = new BST(root);

  bst.insert(5);
  bst.insert(9);
  bst.insert(11);
  bst.insert(12);
  bst.insert(25);
  bst.insert(14);

  expect(bst.inOrderSuccessor(9)).toEqual(11);
  expect(bst.inOrderSuccessor(14)).toEqual(20);
});