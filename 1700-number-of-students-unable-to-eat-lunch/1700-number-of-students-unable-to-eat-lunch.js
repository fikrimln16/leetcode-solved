const countStudents = function(students, sandwiches) {
  const queue = new Queue();

  for (const student of students) {
    queue.enqueue(student);
  }

  let count = 0;
  while (!queue.isEmpty() && count < queue.size()) {
    if (queue.front() === sandwiches[0]) {
      count = 0;
      queue.dequeue();
      sandwiches.shift();
    } else {
      count++;
      queue.enqueue(queue.dequeue());
    }
  }

  return queue.size();
};
