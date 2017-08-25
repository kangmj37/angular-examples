import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Hero }           from './hero';

@Injectable()
export class HeroSearchService {

  constructor(private database: AngularFireDatabase) {}

  search(term: string): Observable<Hero[]> {
//    return this.http
//               .get(`app/heroes/?name=${term}`)
//               .map(response => response.json().data as Hero[]);
    return this.database.list('/heroes',
      {
        query: {
          orderByChild: 'name',
          equalTo: term
        }
      }
    );
  }
}
