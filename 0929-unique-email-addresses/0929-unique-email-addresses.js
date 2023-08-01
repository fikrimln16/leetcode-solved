var numUniqueEmails = function (emails) {
  let counter = new Set();
  for (let email of emails) {
    let splited = email.split("@")
    let local = splited[0].split("+")
    let localfiltered = local[0].replaceAll(".", "")
    counter.add(localfiltered+"@"+splited[1])
  }
  return counter.size
};