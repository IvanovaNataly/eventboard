import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { IItem } from '../models/index';

const routes = {
  api: () => `assets/data/data.json`,
};

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private httpClient: HttpClient ) {}

  getData(): Observable<any[]> {
    return this.httpClient.get<IItem[]>(routes.api());
  }
}


//
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
//
//
// @Injectable({
//   providedIn: 'root'
// })
// export class DataService {
//   private url = 'http://www.json-generator.com/api/json/get/bViOllwYAy?indent=2';
//
//   constructor(private http: HttpClient) {
//   }
//
//   getData(): Observable<Array<any>> {
//     return this.http.get(this.url) as Observable<Array<any>>;
//   }
// }
