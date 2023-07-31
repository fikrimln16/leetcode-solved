class Stack {
  constructor() {
    this.stack = [];
  }

  push(item) {
    this.stack.push(item);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }
}

var isValid = function(s) {
  if (s.length % 2 !== 0) return false;

  const stack = new Stack();
  const map = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  s.split("").forEach((c) => {
    if (map[c]) {
      stack.push(c);
    } else {
      if (stack.isEmpty() || map[stack.peek()] !== c) {
        stack.push(c);
      } else {
        stack.pop();
      }
    }
  });

  return stack.isEmpty();
};

