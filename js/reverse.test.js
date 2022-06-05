import { reverse } from './reverse';

test('Basic Test', () => {
  expect(reverse('hello')).toBe('olleh');
});

test('Number', () => {
  expect(reverse('12345')).toBe('54321');
});

test('Multi Word Test', () => {
  expect(reverse('hello world')).toBe('dlrow olleh');
});

test('Incorrect Type Test', () => {
  expect(reverse(12345)).toBe('Error');
});
