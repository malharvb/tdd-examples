import { analyzeArray } from './analyzeArr';

test('Base Case', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual(
    {
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    },
  );
});

test('Invalid Input 1', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, '6'])).toBe('Invalid');
});

test('Invalid Input 2', () => {
  expect(analyzeArray('abcd')).toBe('Invalid');
});
