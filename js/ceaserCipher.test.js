import { ceaserCipher } from './ceaserCipher';

test('Normal Case', () => {
  expect(ceaserCipher('abcd', 1)).toBe('bcde');
});
test('Wrapping Case', () => {
  expect(ceaserCipher('abzd', 1)).toBe('bcae');
});
test('Capital Case', () => {
  expect(ceaserCipher('AbCd', 1)).toBe('BcDe');
});
test('Punctuation Case', () => {
  expect(ceaserCipher('AbCd!', 1)).toBe('BcDe!');
});
