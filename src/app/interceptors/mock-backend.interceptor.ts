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
    // Get heroes
    if (request.url.endsWith('/heroes') && request.method === 'GET') {
      return this.getHeroes();
    }
    // Post heroes
    if (request.url.endsWith('/heroes') && request.method === 'POST') {
      return this.insertHeroes(request.body);
    }
    // Delete heroe
    if (request.method === 'DELETE') {
      return this.deleteHeroe(this.idFromUrl(request.url))
    }


    return next.handle(request);
  }


  getHeroes(): Observable<any> {
    // Simulate a delay of 1 seconds
    return this.ok(JSON.parse(localStorage.getItem(heroesKey) || '[]'));
  }

  deleteHeroe(id: number): Observable<any> {
    let heroes = JSON.parse(localStorage.getItem(heroesKey) || '[]');
    let newHeroes = heroes.filter((heroe: HeroeModel) => heroe.id !== id);
    localStorage.setItem(heroesKey, JSON.stringify(newHeroes));
    // Simulate a delay of 1 seconds
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
}

export let fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: MockBackendInterceptor,
  multi: true
};