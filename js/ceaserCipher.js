function ceaserCipher(str, key) {
  const charArr = str.split('');
  const charCodes = charArr.map((cur) => cur.charCodeAt());
  charCodes.forEach((e, index, arr) => {
    const type = calcType(e);
    if (isChar(e)) { arr[index] = ((e - type + key) % 26) + type; }
  });
  const final = String.fromCharCode(...charCodes);

  return final;
}

function calcType(charCode) {
  if (charCode > 96 && charCode < 123) return 96;
  if (charCode > 64 && charCode < 91) return 65;
  return charCode;
}

function isChar(charCode) {
  if ((charCode > 96 && charCode < 123) || (charCode > 64 && charCode < 91)) { return true; }
  return false;
}
export { ceaserCipher };
