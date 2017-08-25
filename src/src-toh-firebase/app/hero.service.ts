import { Injectable }    from '@angular/core';
import { Observable }    from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { Hero } from './hero';

@Injectable()
export class HeroService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private heroesUrl = 'api/heroes';  // URL to web api

  constructor(private database: AngularFireDatabase) { }

  getHeroes() {
    return this.database.list('/heroes') as FirebaseListObservable<Hero[]>;
  }

  getHero(id: number) {
    return this.database.list('/heroes',
      {
        query: {
          orderByChild: 'id',
          equalTo: id
        }
      }
    ).map(heroes => heroes[0]);
  }

  delete(key: string) {
    return this.database.list('/heroes').remove(key).then( _ => console.log('success delete.')).catch(this.handleError)
  }

  create(id:number, name: string) {
    return this.database.list('/heroes').push({
      id: id,
      name: name
    });
  }

  update(hero: Hero) {
    // TODO Change KEY!!
    return this.database.list('/heroes').update('KEY!!!', hero);
  }

  private handleError(error: any) {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

