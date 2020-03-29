import {Letter} from './letter';

export class Cell {

  letter: Letter[];

  constructor(letter: Letter[]) {
    this.letter = letter;
  }
}
