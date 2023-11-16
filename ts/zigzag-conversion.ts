function convert(s: string, numRows: number): string {
  const arr: string[] = new Array(numRows).fill("");
  if (numRows === 1) return s;

  let position = 0;
  let movement = 1; // 1 => forward, -1 backward
  for (let x = 0; x < s.length; x++) {
    arr[position] += s[x];
    if (movement === -1) position--;
    if (movement === 1) position++;

    if (position === numRows - 1) movement *= -1;
    if (x > 0 && position === 0) movement *= -1;
  }

  let res: string = "";
  for (let x = 0; x < arr.length; x++) res += arr[x];
  return res;
}

console.log(convert("ABC", 1));
