function isValid(s: string): boolean {
  const pair = {
    "[": "]",
    "(": ")",
    "{": "}",
  };
  const open = Object.keys(pair);
  const close = Object.values(pair);

  for (let x = 0; x < s.length; x += 2) {
    if (open.indexOf(s[x]) !== close.indexOf(s[x + 1])) return false;
  }
  return true;
}

console.log(isValid("(]"));
