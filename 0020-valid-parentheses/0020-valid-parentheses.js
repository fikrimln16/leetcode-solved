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

var isValid = function (s) {
  if(s.length % 2 !== 0) return false

  const stack = new Stack();

  s.split("").forEach((c) => {
    if(c === "(" || c === "{" || c === "["){
      stack.push(c)
    } else if(c === ")" && !stack.isEmpty() && stack.peek() === "("){
      stack.pop()
    } else if(c === "}" && !stack.isEmpty() && stack.peek() === "{"){
      stack.pop()
    } else if(c === "]" && !stack.isEmpty() && stack.peek() === "["){
      stack.pop()
    } else{
      stack.push(c)
    }
  });

  return stack.isEmpty();
};
