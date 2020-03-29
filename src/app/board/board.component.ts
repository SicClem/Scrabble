import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {Cell} from '../cell';



@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  grid: any[] = [];
  easels: string[] = [];
  LIST_IDS: any = [];

  constructor() {
  }


  ngOnInit() {
    this.generateCells();
    console.log(this.grid);
    this.generateEaselLetter();
  }

  addId(j) {
    this.LIST_IDS.push('cdk-drop-list-' + j);
    return + j;
  }

  generateCells() {
    for (let i = 1; i <= 441; i++) {
      const cell = new Cell([]);
      this.grid.push(cell.cell);
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
    console.log(this.grid);
  }

  randomLetter() {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
      'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const index = Math.floor(Math.random() * alphabet.length);
    return alphabet[index];
  }

  generateEaselLetter() {
    for (let i = 0 ; i < 7 ; i++) {
      this.easels.push(this.randomLetter());
    }
  }

}
