import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpResponse
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { concatMap, delay, tap } from 'rxjs/operators';
import { HeroeModel } from '../models/heroeModel';

const heroesKey = 'capitole-heroes-fake-backend';


/**
 * This interceptor is used to simulate a backend api
 * It uses the local storage to store the heroes
 * It has a delay of to simulate the server response
 * It can be used to test the application without a real backend
 */
@Injectable()
export class MockBackendInterceptor implements HttpInterceptor {

  constructor() { }


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("HttpMockRequest", request);
    switch (request.method) {
      case 'GET':
        if (request.url.endsWith('api/heroes')) {
          return this.getHeroes();
        } else if (request.url.startsWith('api/heroes/')) {
          return this.getHeroById(this.idFromUrl(request.url));
        }
        break;
      case 'POST':
        if (request.url.endsWith('api/heroes/')) {
          return this.insertHeroes(request.body);
        }
        if (request.url.endsWith('api/heroes/new')) {
          return this.createHero(request.body);
        }
        break;
      case 'PUT':
        if (request.url.startsWith('api/hero')) {
          // Aquí extraemos el id del URL
          return this.editHeroe(request.body);
        }
        break;
      case 'DELETE':
        if (request.url.startsWith('api/hero')) {
          // Aquí extraemos el id del URL
          const id = this.idFromUrl(request.url);
          return this.deleteHeroe(id);
        }
        break;
    }


    return next.handle(request);
  }


  getHeroes(): Observable<any> {
    return this.ok(JSON.parse(localStorage.getItem(heroesKey) || '[]'));
  }

  getHeroById(id: number): Observable<any> {
    let heroes = JSON.parse(localStorage.getItem(heroesKey) || '[]');
    let heroe = heroes.find((heroe: HeroeModel) => heroe.id === id);
    return this.ok(heroe);
  }

  deleteHeroe(id: number): Observable<any> {
    let heroes = JSON.parse(localStorage.getItem(heroesKey) || '[]');
    let newHeroes = heroes.filter((heroe: HeroeModel) => heroe.id !== id);
    localStorage.setItem(heroesKey, JSON.stringify(newHeroes));
    return this.ok();
  }

  editHeroe(heroeModified: HeroeModel): Observable<any> {
    let heroes = JSON.parse(localStorage.getItem(heroesKey) || '[]');
    let hero = heroes.find((hero: HeroeModel) => hero.id == heroeModified.id);
    hero.name = heroeModified.name;
    localStorage.setItem(heroesKey, JSON.stringify(heroes));
    return this.ok();
  }

  insertHeroes(heroes: HeroeModel[]): Observable<any> {

    // If heroes already exist return an error
    if (JSON.parse(localStorage.getItem(heroesKey) || '[]').length > 0) {
      return this.error('Heroes already exist');
    }

    let heroesList = JSON.parse(localStorage.getItem(heroesKey) || '[]');
    heroesList = heroesList.concat(heroes);
    localStorage.setItem(heroesKey, JSON.stringify(heroesList));

    return this.ok();
  }
  createHero(hero: HeroeModel): Observable<any> {

    let heroesList: HeroeModel[] = JSON.parse(localStorage.getItem(heroesKey) || '[]');

    // name validation
    if (!hero.name || hero.name.trim().length < 2) {
      return this.error('Invalid name');
    }


    // Name must be unique
    const existingNames = new Set(heroesList.map(hero => hero.name.toLowerCase()));
    if (existingNames.has(hero.name.toLowerCase())) {
      return this.error('Heroe with this name already exist');
    }

    hero.id = this.findNewId(heroesList);
    heroesList.push(hero);
    localStorage.setItem(heroesKey, JSON.stringify(heroesList));

    return this.ok();
  }

  // helper functions

  ok(body?: any) {
    const response = new HttpResponse({ status: 200, body });
    console.log("HttpMockResponse", response);
    return of(response)
      .pipe(delay(200)); // delay observable to simulate server api call
  }

  error(message: string) {
    // Its done with concatMap because throwError do not wait for the delay by default
    return of(null).pipe(
      delay(200),
      concatMap(() => throwError(() => ({ error: { message } })))
    );
  }

  idFromUrl(url: string) {
    const urlParts = url.split('/');
    return parseInt(urlParts[urlParts.length - 1]);
  }


  // get the first available ID (this is enough for mock purposes)
  findNewId(heroesList: HeroeModel[]) {
    // Create a set of all existing IDs
    const existingIds = new Set(heroesList.map(hero => hero.id));

    // Find the new ID
    let newId = 1;
    while (existingIds.has(newId)) {
      newId++;
    }

    return newId;
  }

}

export let fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: MockBackendInterceptor,
  multi: true
};