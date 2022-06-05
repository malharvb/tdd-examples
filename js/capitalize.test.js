import { capitalize } from './capitalize';

test('Basic Test', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('Number', () => {
  expect(capitalize('12345')).toBe('12345');
});

test('All Capital Test', () => {
  expect(capitalize('HELLO')).toBe('HELLO');
});

test('Multi Word String Test', () => {
  expect(capitalize('hello world ? how are you')).toBe('Hello world ? how are you');
});
