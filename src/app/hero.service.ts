import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';


@Injectable()
export class HeroService {

  private heroesUrl = 'api/heroes';

  constructor(private http: Http) { }


  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
    .then(heroes => heroes.find(hero => hero.id === id));
  }

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise<Hero[]>((resolve) => {
      setTimeout(resolve, 2000)
    }).then(() => this.getHeroes());
  }

}
