var reverseVowels = function (s) {
  let stack = []

  let vowel = 'aiueoAIUEO'
  let split = s.split("")
  for (let i = 0; i < split.length; i++) {
    if(vowel.includes(split[i])) stack.push(split[i])
  }
  
  let res = []
  for (let i = 0; i < split.length; i++) {
    if(vowel.includes(split[i].toLowerCase())){
      res.push(stack.pop())
    } else {
      res.push(split[i])
    }    
  }

  return res.join("")
};