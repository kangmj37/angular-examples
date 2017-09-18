import { Injectable }    from '@angular/core';
import { Observable }    from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { Reversi } from './reversi';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ReversiService {
  constructor(private database: AngularFireDatabase) {}

  makeRoom(name: string) {
    let reversiObj = this.database.object('/reversi');
  }

  joinReversi() {
      console.log('join start');
      this.database.object('/reversi').toPromise().then((_: Reversi) => {
        console.log('join');
        console.dir(_);
      });
  }

  getClickEvent() {
      return this.database.list('/reversi') as FirebaseListObservable<Reversi[]>;
  }
}