function checkValid(a, b) {
  if (typeof a === 'number' && typeof b === 'number') return true;
  return false;
}

function add(a, b) {
  if (!checkValid(a, b)) return 'Incorrect Input';
  return a + b;
}

function sub(a, b) {
  if (!checkValid(a, b)) return 'Incorrect Input';
  return a - b;
}

function mult(a, b) {
  if (!checkValid(a, b)) return 'Incorrect Input';
  return a * b;
}
function div(a, b) {
  if (!checkValid(a, b)) return 'Incorrect Input';
  return a / b;
}

const calculator = {
  add, sub, mult, div,
};

export { calculator };
