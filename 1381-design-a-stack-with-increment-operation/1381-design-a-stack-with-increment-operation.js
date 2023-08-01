class CustomStack {
  constructor(maxSize) {
    this.stack = []
    this.count = 0
    this.maxSize = maxSize
  }

  push(element) {
    if(this.count !== this.maxSize) {
        this.stack.push(element)
        this.count = this.count + 1
    }
  }

  pop() {
    if (this.isEmpty()) {
      return -1;
    } else {
      this.count--
      return this.stack.pop();
    }  
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  increment(k, val){
    for (let i = 0; i < Math.min(k, this.count); i++) {
      this.stack[i] = this.stack[i] + val
    }
  }

}

/** 
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */