const linkCode = new Map();
const urlAsli = new Map();
const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

const getCode = () =>
  "http://tinyurl.com/" +
  Array.from({ length: 6 }, () => chars.charAt(Math.random() * 62)).join("");

const encode = (longUrl) => {
  if (urlAsli.has(longUrl)) {
    return urlAsli.get(longUrl);
  }

  let code = getCode();
  while (linkCode.has(code)) {
    code = getCode();
  }

  linkCode.set(code, longUrl);
  urlAsli.set(longUrl, code);

  return code;
};

const decode = (shortUrl) => linkCode.get(shortUrl);