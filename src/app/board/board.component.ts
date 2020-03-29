import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {Cell} from '../cell';
import {Letter} from '../letter';



@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  grid: Cell[] = [];
  easels: Letter[] = [];
  LIST_IDS: string[] = [];
  letterBag: Letter[] = [];

  constructor() {
  }


  ngOnInit() {
    this.bagFiller();
    this.generateCells();
    console.log(this.letterBag);
    this.generateEaselLetter();
  }

  /**
   * Used to param the drag&drop's recipients.
   * @param j : number is the index of the cell.
   * return the index and add to LIST_IDS the template variable of the cell.
   */
  addId(j) {
    this.LIST_IDS.push('cdk-drop-list-' + j);
    return + j;
  }

  /**
   * Used to generate the grid's cells.
   */
  generateCells() {
    for (let i = 1; i <= 441; i++) {
      const cell = new Cell([]);
      this.grid.push(cell);
    }
  }

  /**
   * Angular Material's Drag&drop function.
   * @param event is the user's drag.
   */
  drop(event: CdkDragDrop<Letter[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  /**
   * Used to generate random letters for the easel.
   */
  randomLetter() {
    const index = Math.floor(Math.random() * this.letterBag.length);
    return this.letterBag[index];
  }

  /**
   * Used to fill the easel with 7 random letters.
   */
  generateEaselLetter() {
    for (let i = 0 ; i < 7 ; i++) {
      this.easels.push(this.randomLetter());
    }
  }

  letterParameter(letter: string, nbLetter: number, value: number) {
    for (let i = 0 ; i < nbLetter ; i ++) {
      const l = new Letter(letter, value);
      this.letterBag.push(l);
    }
  }

  bagFiller() {
    this.letterParameter('A', 9, 1);
    this.letterParameter('B', 2, 3);
    this.letterParameter('C', 2, 3);
    this.letterParameter('D', 3, 2);
    this.letterParameter('E', 15, 1);
    this.letterParameter('F', 2, 4);
    this.letterParameter('G', 2, 2);
    this.letterParameter('H', 2, 4);
    this.letterParameter('I', 8, 1);
    this.letterParameter('J', 1, 8);
    this.letterParameter('K', 1, 10);
    this.letterParameter('L', 5, 1);
    this.letterParameter('M', 3, 2);
    this.letterParameter('N', 6, 1);
    this.letterParameter('O', 6, 1);
    this.letterParameter('P', 2, 3);
    this.letterParameter('Q', 1, 8);
    this.letterParameter('R', 6, 1);
    this.letterParameter('S', 6, 1);
    this.letterParameter('T', 6, 1);
    this.letterParameter('U', 6, 1);
    this.letterParameter('V', 2, 4);
    this.letterParameter('W', 1, 10);
    this.letterParameter('X', 1, 10);
    this.letterParameter('Y', 1, 1);
    this.letterParameter('Z', 1, 1);
    this.letterParameter('', 2, 0);
  }

}
