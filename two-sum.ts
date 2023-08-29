function twoSum(nums: number[], target: number): number[] {
  const res: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const diff = target - num;
    const diffIndex = nums.indexOf(diff);

    // if diff exists and is not the same index
    if (diffIndex !== -1 && diffIndex !== i) {
      res.push(i, diffIndex);
      break;
    }
  }

  return res;
}

console.log(twoSum([2, 7, 11, 15], 9));
