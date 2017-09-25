import { Injectable }    from '@angular/core';
import { Observable }    from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

import { RoomHistory, RoomObj } from './reversi';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
    
const reversiPath = '/reversi';

@Injectable()
export class ReversiService {
    constructor(private database: AngularFireDatabase) { }

    checkRoom(roomName: string) {
        return this.database.list(reversiPath, {
            query: {
                orderByChild: 'name',
                equalTo: roomName
            }
        }).take(1);
    }

    getRoom(roomName: string) {
        return this.database.list(reversiPath, {
            query: {
                orderByChild: 'name',
                equalTo: roomName
            }
        }).map(list => list[0]);
    }

    addRoom(childObj: RoomObj | any): void {
        this.database.list(reversiPath).push(childObj);
    }
    
    setRoom(key: string, childObj: RoomObj | any): void {
        this.database.object(reversiPath + "/" + key).set(childObj);
    }
    
    getRoomHistories(key: string) {
        return this.database.list(reversiPath + "/" + key + "/history", {
            query: {
                orderByChild: 'date'
            }
        });
    }

    updateRoomOrder(key: string, orderStr: string) {
        this.database.object(reversiPath + "/" + key).update({order: orderStr});
    }
    
    updateRoomJoinNum(key: string, joinNum: number) {
        this.database.object(reversiPath + "/" + key).update({joinNum: joinNum});
    }
    
    addRoomHistory(key: string, childObj: RoomHistory) {
        childObj.date = new Date().getTime();
        this.database.list(reversiPath + '/' + key + '/history').push(childObj);
    }
}