import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HeroeModel } from '../models/heroeModel';
@Injectable({
  providedIn: 'root'
})
export class MockApiService {

  heroesUrl = 'api/heroes';




  constructor(private http: HttpClient) { }

  getHeroes(): Observable<HeroeModel[]> {
    return this.http.get<HeroeModel[]>(this.heroesUrl);
  }
  getHeroById(id: number): Observable<HeroeModel> {
    return this.http.get<HeroeModel>(this.heroesUrl + '/' + id);
  }

  deleteHeroe(id: number): Observable<HeroeModel> {
    return this.http.delete<HeroeModel>(this.heroesUrl + '/' + id);
  }
  postHeroes(heroes: HeroeModel[]): Observable<HeroeModel[]> {
    return this.http.post<HeroeModel[]>(this.heroesUrl, heroes);
  }

  createHero(hero: HeroeModel): Observable<HeroeModel> {
    return this.http.post<HeroeModel>(this.heroesUrl + '/new', hero);
  }

  putHeroe(hero: HeroeModel): Observable<HeroeModel> {
    return this.http.put<HeroeModel>(this.heroesUrl + '/' + hero.id, hero);
  }

}
