function minTaps(n: number, ranges: number[]): number {
  const points = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
  //   console.log(points);
  points[0] = 0;

  for (let i = 0; i <= n; i++) {
    const left = Math.max(i - ranges[i], 0); // lower than 0 wasn't used
    const right = i + ranges[i];
    // console.log(left, right);

    for (let j = left; j <= right; j++) {
      points[j] = Math.min(points[j], points[left] + 1);
      //   console.log(`points[${j}]`, points[j]);
    }
  }

  return points[n] === Number.MAX_SAFE_INTEGER ? -1 : points[n];
}

// console.log(minTaps(5, [3, 4, 1, 1, 0, 0]));
console.log(minTaps(8, [4, 0, 0, 3, 3, 1, 1, 4]));
// console.log(minTaps(3, [0, 0, 0, 0]));
