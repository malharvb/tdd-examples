function analyzeArray(arr) {
  if (!Array.isArray(arr)) return 'Invalid';
  if (arr.some((e) => typeof e === 'string')) return 'Invalid';
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const average = arr.reduce((total, num) => total + num) / arr.length;
  const { length } = arr;

  const obj = {
    max, min, average, length,
  };

  return obj;
}

export { analyzeArray };
