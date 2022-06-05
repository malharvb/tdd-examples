function reverse(str) {
  if (typeof str !== 'string') return 'Error';
  const arr = str.split('');
  const revArr = arr.reverse();
  return revArr.join('');
}

export { reverse };
