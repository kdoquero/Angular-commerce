import { Injectable } from '@angular/core';
import { Game } from '../entities/game';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiGamesService {
  games:Game[];
  url:string;

  constructor(private http: HttpClient) {
    this.url = "http://localhost:3000/games";
  }

  getAll() {
    return this.http.get<Game[]>(this.url)
  }
  
  getById(id) {
    return this.http.get<Game>(`${this.url}/${id}`)
  }

}
