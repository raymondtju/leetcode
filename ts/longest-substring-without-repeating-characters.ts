function lengthOfLongestSubstring(s: string): number {
  let text = "";
  let longest: number = 0;
  for (let x = 0; x < s.length; x++) {
    if (text.indexOf(s[x]) !== -1) {
      // cut and continue the text
      text = text.slice(text.indexOf(s[x]) + 1).concat(s[x]);
    } else {
      text += s[x];
      longest = text.length > longest ? text.length : longest;
    }
  }

  return longest;
}

console.log(lengthOfLongestSubstring("vfvdf"));
