import { Letter } from './letter';

describe('Letter', () => {
  it('should create an instance', () => {
    expect(new Letter('A', 1)).toBeTruthy();
  });

  it('should store letter and value', () => {
    const letter = new Letter('Z', 10);
    expect(letter.letter).toBe('Z');
    expect(letter.value).toBe(10);
  });
});
