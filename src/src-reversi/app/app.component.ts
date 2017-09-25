import { Component, OnInit } from '@angular/core';
import { Observable }    from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

import { ReversiService } from './app.service'

import { RoomHistory, RoomObj } from './reversi';

//const SINGLE_MODE = true;
const SINGLE_MODE = false;

const MATRIX_ROW_SIZE = 8;
const MATRIX_COL_SIZE = 8;
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
  startGame: boolean;

  roomHistoryCnt: number;
  roomName: string;
  roomObj: RoomObj;
  isRoomObjReady: boolean;
  roomObjHistoryList: Array<RoomHistory>;
  isRoomObjHistoryListReady: boolean;
  ownStone: string;

  constructor(private reversiService: ReversiService) { }

  private setSModeInit() {
    let rPoint: number, cPoint: number;

    this.order = WHITE;

    /* 34, 35, 42, 43 visible */
    rPoint = (MATRIX_ROW_SIZE - 2) / 2;
    cPoint = (MATRIX_COL_SIZE - 2) / 2;

    this.setWhite(rPoint * MATRIX_COL_SIZE + cPoint);
    this.setBlack(rPoint * MATRIX_COL_SIZE + cPoint + 1);
    this.setBlack((rPoint + 1) * MATRIX_COL_SIZE + cPoint);
    this.setWhite((rPoint + 1) * MATRIX_COL_SIZE + cPoint + 1);
  }

  private setMModeInit() {
    let rPoint: number, cPoint: number;

    this.setOrderFirebase(WHITE);

    /* 34, 35, 42, 43 visible */
    rPoint = (MATRIX_ROW_SIZE - 2) / 2;
    cPoint = (MATRIX_COL_SIZE - 2) / 2;
    
    this.setWhiteFirebase(rPoint * MATRIX_COL_SIZE + cPoint);
    this.setBlackFirebase(rPoint * MATRIX_COL_SIZE + cPoint + 1);
    
    this.setWhiteFirebase((rPoint + 1) * MATRIX_COL_SIZE + cPoint + 1);
    this.setBlackFirebase((rPoint + 1) * MATRIX_COL_SIZE + cPoint);
  }

  ngOnInit() {
    this.cells = new Array(MATRIX_SIZE);
    this.cntBlacks = this.cntWhites = 0;

    for (let i = 0; i < MATRIX_ROW_SIZE; i++) {
      for (let y = 0; y < MATRIX_COL_SIZE; y++) {
        this.cells[i * MATRIX_ROW_SIZE + y] = { stat: EMPTY };
      }
    }

    if (SINGLE_MODE) {
      this.setSModeInit();
    } else {
      this.isRoomObjReady = false;
      this.isRoomObjHistoryListReady = false;
      this.roomHistoryCnt = 1;  // dummy history
      this.roomName = '';
    }
  }

  makeRoom() {
    this.ownStone = WHITE;
    this.reversiService.checkRoom(this.roomName).subscribe(room => {
      let _dummyHistory = { dummy: { date: 0, order: '', point: 0 } };
      if (room.length == 0) {
        /* Make Room */
        console.log('Create Room: ' + this.roomName);
        this.reversiService.addRoom({ name: this.roomName, order: '', joinNum: 0, history: _dummyHistory });
      } else {
        /* Exist Room */
        console.log('Exist Room: ' + this.roomName + ' Key: ' + room[0].$key);
        this.reversiService.setRoom(room[0].$key, { name: this.roomName, order: '', joinNum: 0, history: _dummyHistory });
      }
      this.connectRoom();

      /* TODO. Edit !!!! */
      Observable.of(null).delay(3000).subscribe(_ => {
        this.setMModeInit();
      });
    });
  }

  joinRoom() {
    this.ownStone = BLACK;
    this.connectRoom();
  }
  
  private connectRoom() {
    this.reversiService.checkRoom(this.roomName).subscribe(room => {
      if (room.length == 0) {
        alert('Not Exist room: ' + this.roomName);
      } else {
        this.reversiService.getRoom(this.roomName).subscribe(obj => {
          this.isRoomObjReady = true;
          this.roomObj = obj;
          this.order = obj.order;
        });
        this.reversiService.getRoomHistories(room[0].$key).subscribe(lists => {
          this.isRoomObjHistoryListReady = true;
          this.roomObjHistoryList = lists;
          
          /* list.length 1 is dummy */
          while (lists.length > this.roomHistoryCnt) {
            let list = lists[this.roomHistoryCnt];
            let reverseAllPoints: Array<number>;

            if (list.order == WHITE) {
              this.setWhite(list.point);
            } else if (list.order == BLACK) {
              this.setBlack(list.point);
            }
            reverseAllPoints = this.hasReverseAll(list.point, list.order);
            if (reverseAllPoints.length > 0) {
              reverseAllPoints.forEach((point) => {
                this.setReverse(point);
              })
            }
            this.roomHistoryCnt++;
          }
        });
      }
    });
  }
  
  private setBlackFirebase(pointNum: number): void {
    let history: RoomHistory = {point: pointNum, order: BLACK} as RoomHistory;
    this.reversiService.addRoomHistory(this.roomObj.$key, history);
  }
  
  private setWhiteFirebase(pointNum: number): void {
    let history: RoomHistory = {point: pointNum, order: WHITE} as RoomHistory;
    this.reversiService.addRoomHistory(this.roomObj.$key, history);
  }

  private setOrderFirebase(order: string) {
    this.reversiService.updateRoomOrder(this.roomObj.$key, order);
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

  private checkGameOver(): boolean {
    /* check 모든 칸이 다 찾는지 ? */
    return this.cntBlacks + this.cntWhites == MATRIX_SIZE ? true : false;
  }

  private checkOrder(order: string): boolean {
    /* check 더이상 둘수있는곳이 없는 경우 ? */
    for (let i = 0; i < MATRIX_SIZE; i++) {
      if (this.cells[i].stat != EMPTY)
        continue;
      
      let reverseTestPoints = this.hasReverseAll(i, order);
      if (reverseTestPoints.length > 0)
        return true;;
    }
    return false;
  }
  
  private onClickMultiMode(point: number): void {
    let reverseAllPoints: Array<number>;
    let order = this.roomObj.order;
    let candidateOrder: string;

    if (order != this.ownStone) {
      alert('Not your turn!');
      return;
    }

    if (this.cells[point].stat != EMPTY)
      return;

    reverseAllPoints = this.hasReverseAll(point, order);
    if (reverseAllPoints.length == 0)
      return;
    
    if (this.ownStone === WHITE) {
      this.setWhiteFirebase(point);
      candidateOrder = BLACK;
    } else {
      this.setBlackFirebase(point);
      candidateOrder = WHITE;
    }

    if (this.checkGameOver() == true) {
      alert('Game Over');
      return;
    }

    order = (this.checkOrder(candidateOrder) == true ? candidateOrder : order);
    this.reversiService.updateRoomOrder(this.roomObj.$key, order);
  }

  private onClickSingleMode(point: number): void {
    let reverseAllPoints: Array<number>;
    let order = this.order;
    let candidateOrder: string;

    if (this.cells[point].stat != EMPTY)
      return;

    reverseAllPoints = this.hasReverseAll(point, order);
    if (reverseAllPoints.length == 0)
      return;
    
    console.log(reverseAllPoints);
    if (order === WHITE) {
      this.setWhite(point);
      candidateOrder = BLACK;
    } else {
      this.setBlack(point);
      candidateOrder = WHITE;
    }
    reverseAllPoints.forEach((point) => {
      this.setReverse(point);
    })

    if (this.checkGameOver() == true) {
      alert('Game Over');
      return;
    }

    this.order = (this.checkOrder(candidateOrder) == true ? candidateOrder : order);
  }

  onClick(point: number): void {
    SINGLE_MODE ? this.onClickSingleMode(point) : this.onClickMultiMode(point);
  }

  private hasReverseAll(point: number, order: string): Array<number> {
    let reverseAllPoints = Array(0);
    let x, y;

    for (y = Y_COORDINATE.DOWN; y <= Y_COORDINATE.UP; y++) {
      for (x = X_COORDINATE.LEFT; x <= X_COORDINATE.RIGHT; x++) {
        if (y == Y_COORDINATE.MIDDLE && x == X_COORDINATE.MIDDLE)
          continue;
        reverseAllPoints = reverseAllPoints.concat(this.hasReverseLine(point, x, y, order, []));
      }
    }
    return reverseAllPoints;
  }

  private isDiffLine(aPoint: number, bPoint: number): boolean {
    if (parseInt((aPoint/MATRIX_COL_SIZE).toString()) != 
      parseInt((bPoint/MATRIX_COL_SIZE).toString()))
      return true;
    return false;
  }

  private isOutOfMatrixRange(point: number): boolean {
    if (point < 0 || 
      point >= MATRIX_COL_SIZE * MATRIX_ROW_SIZE)
      return true;
    return false;
  }

  private hasReverseLine(point: number, x: X_COORDINATE, y: Y_COORDINATE, order: string, Points: Array<number>): Array<number> {
    let xPoint = point + x;
    let checkPoint = xPoint + (MATRIX_COL_SIZE * y);

    console.log('1 X:' + x + ' Y:' + y + ' point:' + point + ' SUM:' + checkPoint);
    if (this.isDiffLine(point, xPoint) == true) /* point is left/right side terminal */
      return [];
    
    console.log('2 X:' + x + ' Y:' + y + ' point:' + point + ' SUM:' + checkPoint);
    if (this.isOutOfMatrixRange(checkPoint) == true)  /* checkPoint is out of range */
      return [];

    console.log('3 X:' + x + ' Y:' + y + ' point:' + point + ' SUM:' + checkPoint);
    if (this.cells[checkPoint].stat == EMPTY)
      return [];

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