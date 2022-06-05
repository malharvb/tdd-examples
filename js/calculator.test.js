import { calculator } from './calculator';

test('basic add', () => {
  expect(calculator.add(4, 5)).toBe(9);
});
test('basic sub', () => {
  expect(calculator.sub(5, 4)).toBe(1);
});
test('basic mult', () => {
  expect(calculator.mult(4, 5)).toBe(20);
});
test('basic div', () => {
  expect(calculator.div(10, 5)).toBe(2);
});
test('incorrect input data type', () => {
  expect(calculator.add('5', '6')).toBe('Incorrect Input');
});
// test('',() => {
//     expect(calculator.).toBe()
// })
// test('',() => {
//     expect(calculator.).toBe()
// })
// test('',() => {
//     expect(calculator.).toBe()
// })
