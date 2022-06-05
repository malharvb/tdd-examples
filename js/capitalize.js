function capitalize(str) {
  const restStr = str.slice(1);
  const firstLetter = str.charAt(0);
  if (!str.match(/[a-z]/i)) return str;
  return (firstLetter.toUpperCase() + restStr);
}

export { capitalize };
