import { Cell } from './cell';
import { Letter } from './letter';

describe('Cell', () => {
  it('should create an instance', () => {
    expect(new Cell([])).toBeTruthy();
  });

  it('should store letters', () => {
    const letters = [new Letter('A', 1)];
    const cell = new Cell(letters);
    expect(cell.letter.length).toBe(1);
    expect(cell.letter[0].letter).toBe('A');
  });
});
