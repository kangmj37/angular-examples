import { Component, OnInit } from '@angular/core';

const MATRIX_ROW_SIZE = 4;
const MATRIX_COL_SIZE = 4;
const MATRIX_SIZE = MATRIX_ROW_SIZE * MATRIX_COL_SIZE;

const BLACK = 'black';
const WHITE = 'white';
const EMPTY = '';

const enum X_COORDINATE {
  LEFT = -1,
  MIDDLE = 0,
  RIGHT = 1,
}

const enum Y_COORDINATE {
  DOWN = -1,
  MIDDLE = 0,
  UP = 1
}

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
  cntBlacks: number;
  cntWhites: number;
  order: string;

  constructor() {}

  ngOnInit() {
    let rPoint: number, cPoint: number;
    
    this.order = WHITE;
    this.cells = new Array(MATRIX_SIZE);
    
    for (let i = 0; i < MATRIX_ROW_SIZE; i++) {
      for (let y = 0; y < MATRIX_COL_SIZE; y++) {
        this.cells[i * MATRIX_ROW_SIZE + y] = { stat: EMPTY };
      }
    }

    /* 34, 35, 42, 43 visible */
    rPoint = (MATRIX_ROW_SIZE - 2) / 2;
    cPoint = (MATRIX_COL_SIZE - 2) / 2;

    this.setWhite(rPoint * MATRIX_COL_SIZE + cPoint);
    this.setBlack(rPoint * MATRIX_COL_SIZE + cPoint + 1);
    this.setBlack((rPoint + 1) * MATRIX_COL_SIZE + cPoint);
    this.setWhite((rPoint + 1) * MATRIX_COL_SIZE + cPoint + 1);

    this.cntBlacks = 2; this.cntWhites = 2;
  }

  private setBlack(point: number): void {
    this.cells[point].stat = BLACK;
    this.cntBlacks++;
  }
  
  private setWhite(point: number): void {
    this.cells[point].stat = WHITE;
    this.cntWhites++;
  }
  
  private setReverse(point: number): void {
    if (this.cells[point].stat === BLACK) {
      this.cntBlacks--;
      this.setWhite(point);
    } else if (this.cells[point].stat === WHITE) {
      this.cntWhites--;
      this.setBlack(point);
    }
  }

  onClick(point: number): void {
    let reverseAllPoints: Array<number>;
    let order = this.order;
    let i: number;

    if (this.cells[point].stat != EMPTY)
      return;

    reverseAllPoints = this.hasReverseAll(point, order);
    if (reverseAllPoints.length == 0)
      return;
    
    console.log(reverseAllPoints);
    if (order === WHITE) {
      this.setWhite(point);
      this.order = BLACK;
    } else {
      this.setBlack(point);
      this.order = WHITE;
    }
    reverseAllPoints.forEach((point) => {
      this.setReverse(point);
    })

    /* check.1 모든 칸이 다 찾는지 ? */
    if (this.cntBlacks + this.cntWhites == MATRIX_SIZE)
      alert('Game Over...');

    /* check.2 다음 선수가 더이상 둘수있는곳이 없는 경우 ? */
    i = 0;
    for (; i < MATRIX_SIZE; i++) {
      if (this.cells[i].stat != EMPTY)
        continue;
      
      let reverseTestPoints = this.hasReverseAll(i, this.order);
      if (reverseTestPoints.length > 0)
        break;
    }
    if (i == MATRIX_SIZE)
      alert('Game Over...')
  }

  private hasReverseAll(point: number, order: string): Array<number> {
    let reverseAllPoints = Array(0);
    let reverseLinePoints: Array<number>;
    let x, y;

    for (y = Y_COORDINATE.DOWN; y <= Y_COORDINATE.UP; y++) {
      for (x = X_COORDINATE.LEFT; x <= X_COORDINATE.RIGHT; x++) {
        if (y == Y_COORDINATE.MIDDLE && x == X_COORDINATE.MIDDLE)
          continue;
        reverseLinePoints = this.hasReverseLine(point, x, y, order, []);
        reverseAllPoints = reverseAllPoints.concat(reverseLinePoints);
      }
    }
    return reverseAllPoints;
  }

  private hasReverseLine(point: number, x: X_COORDINATE, y: Y_COORDINATE, order: string, Points: Array<number>): Array<number> {
    let xPoint = point + x;
    let checkPoint = xPoint + (MATRIX_COL_SIZE * y);

    console.log('1 X:' + x + ' Y:' + y + ' point:' + point + ' SUM:' + checkPoint);
    if (parseInt((point/MATRIX_COL_SIZE).toString()) != 
      parseInt((xPoint/MATRIX_COL_SIZE).toString()))  /* point is left/right side */
      return [];
    
    console.log('2 X:' + x + ' Y:' + y + ' point:' + point + ' SUM:' + checkPoint);
    if (checkPoint < 0 || 
      checkPoint >= MATRIX_COL_SIZE * MATRIX_ROW_SIZE)  /* check point is matrix outer */ 
      return [];

    if (this.cells[checkPoint].stat == EMPTY)
      return [];
    
    console.log('3 X:' + x + ' Y:' + y + ' point:' + point + ' SUM:' + checkPoint);

    /* same color finish */
    if (this.cells[checkPoint].stat == order) {
      if (Points.length != 0)
        return Points;

      return []; 
    }
    
    Points.push(checkPoint);
    
    return this.hasReverseLine(checkPoint, x, y, order, Points);
  }
}