/**
 * @param {string[]} messages
 * @param {string[]} senders
 * @return {string}
 */
var largestWordCount = function(messages, senders) {
   let map = new Map();

  //menghitung sender ngirim berapa kata
  for (let i = 0; i < senders.length; i++) {
    //counter
    map.set(senders[i], (map.get(senders[i]) || 0) + messages[i].split(" ").length);
  }

  let largerName = "";
  let sameValue = null;
  
  //membandingkan dengan yang lainnya
  for (const [sender, value] of map.entries()) {
    if (
      sameValue === null ||
      value > sameValue ||
      (value === sameValue && sender > largerName)
    ) {
      largerName = sender;
      sameValue = value;
    }
  }

  return largerName;
};