class Stack {
  constructor() {
    this.stack = [];
  }

  push(item) {
    this.stack.push(item);
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack kosong";
    }
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  join(){
    return this.stack.join("/")
  }
}

const simplifyPath = function (path) {
  const stack = new Stack();

  let split = path.split('/')

  for(const arr of split){
    if(arr === "" || arr === ".") continue

    if(arr === ".."){
      stack.pop()
    } else {
      stack.push(arr)
    }
  }
  return "/" + stack.join()
};