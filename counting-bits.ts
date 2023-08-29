function countBits(n: number): number[] {
  const res = new Array(n + 1).fill(0);

  for (let i = 0; i <= n; i++) {
    let count = 0;
    let num = i;
    while (num > 0) {
      count += num & 1; // if lsb is 1, count++
      num >>= 1; // shift right
    }
    res[i] = count;
  }

  return res;
}

console.log(countBits(5));

// 0 -> 0000
// 1 -> 0001
// 2 -> 0010
// 3 -> 0011
// 4 -> 0100
// 5 -> 0101
