import { Component, OnInit } from '@angular/core';

const MATRIX_ROW_SIZE = 8;
const MATRIX_COL_SIZE = 8;

const BLACK = 'black';
const WHITE = 'white';
const EMPTY = '';

class Cell {
  stat: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Hello Reversi';
  cells: Array<Cell>;
  order: string;

  constructor() {}

  ngOnInit() {
    let r_index: number, c_index: number;

	this.order = 'white';
    this.cells = new Array(MATRIX_ROW_SIZE * MATRIX_COL_SIZE);
	for (let i = 0; i < MATRIX_ROW_SIZE; i++) {
	  for (let y = 0; y < MATRIX_COL_SIZE; y++) {
	    this.cells[i * MATRIX_ROW_SIZE + y] = { stat: EMPTY }
	  }
	}

    /* 34, 35, 42, 43 visible */
	r_index = (MATRIX_ROW_SIZE - 2) / 2;
	c_index = (MATRIX_COL_SIZE - 2) / 2;
    
	this.setWhite(r_index * MATRIX_ROW_SIZE + c_index);
	this.setBlack(r_index * MATRIX_ROW_SIZE + c_index + 1);
	this.setBlack((r_index + 1) * MATRIX_ROW_SIZE + c_index);
	this.setWhite((r_index + 1) * MATRIX_ROW_SIZE + c_index + 1);
  }

  private setBlack(index: number): void {
    this.cells[index].stat = BLACK;
  }
  
  private setWhite(index: number): void {
    this.cells[index].stat = WHITE;
  }
  
  private setEmpty(index: number): void {
    this.cells[index].stat = EMPTY;
  }

  onClick(index: number): void {
    let reverseList: Array<number>;
	
	if (this.cells[index].stat != EMPTY)
	  return;

	reverseList = this.hasReverse(index);
  }

  private hasReverse(index: number): Array<number> {
    let reverseList: Array<number> = Array(0);
    let i;

	return reverseList;
  }
}
