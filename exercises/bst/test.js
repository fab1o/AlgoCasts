const Node = require('./index');

test('Node is a constructor', () => {
  expect(typeof Node.prototype.constructor).toEqual('function');
});

test('Node can insert correctly', () => {
  const node = new Node(10);
  node.insert(5);
  node.insert(15);
  node.insert(17);

  expect(node.left.data).toEqual(5);
  expect(node.right.data).toEqual(15);
  expect(node.right.right.data).toEqual(17);
});

test('Node can also insert correctly', () => {
  const node = new Node(10);
  node.insert(5);
  node.insert(15);
  node.insert(17);
  node.insert(9);
  node.insert(8);
  node.insert(11);
  node.insert(12);
  node.insert(14);
  node.insert(13);

  expect(node.left.data).toEqual(5);
  expect(node.left.right.data).toEqual(9);
  expect(node.left.right.left.data).toEqual(8);
  expect(node.right.data).toEqual(15);
  expect(node.right.left.data).toEqual(11);
  expect(node.right.left.right.data).toEqual(12);
  expect(node.right.left.right.right.data).toEqual(14);
  expect(node.right.left.right.right.left.data).toEqual(13);
  expect(node.right.right.data).toEqual(17);
});

test('Contains returns node with the same data', () => {
  const node = new Node(10);
  node.insert(5);
  node.insert(15);
  node.insert(20);
  node.insert(0);
  node.insert(-5);
  node.insert(3);

  const three = node.left.left.right;
  expect(node.contains(3)).toEqual(three);
});

test('Contains returns null if value not found', () => {
  const node = new Node(10);
  node.insert(5);
  node.insert(15);
  node.insert(20);
  node.insert(0);
  node.insert(-5);
  node.insert(3);

  expect(node.contains(9999)).toEqual(null);
});
