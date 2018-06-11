import { Injectable } from '@angular/core';
import { Game } from '../entities/game';
import { HttpClient,HttpParams,HttpHeaders } from '@angular/common/http';
import { tap } from "rxjs/operators";

@Injectable()
export class IgbdGameService {

  games:Game[];
  private url:string;
  private proxyUrl:string;
  private apiKey:string;
  httpOptions = {
    headers: new HttpHeaders({
      'user-key' : "9884ffd3d846d45bbf382d91a2cdc012",
      'Accept' :	'application/json',
      'Access-Control-Allow-Origin' : "*"
    })
  };

  constructor(private http: HttpClient) {
    this.url = "http://www.whateverorigin.org/api-endpoint.igdb.com/";
    this.apiKey = "/?user-key="
  }


  getAll() {
    return this.http.get(`${this.url}games`,this.httpOptions).pipe(
      tap(value => {
        localStorage.setItem('games',JSON.stringify(value))
        console.log(value)
      })
    )
  }
  
  getById(id) {
    return this.http.get<Game>(`${this.url}/${id}`)
  }


}
