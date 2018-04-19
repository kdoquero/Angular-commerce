import { Component, OnInit } from '@angular/core';
import { Game } from '../entities/game';
import { ApiGamesService } from '../services/api-games.service';

@Component({
  selector: 'app-simplon-store',
  templateUrl: './simplon-store.component.html',
  styleUrls: ['./simplon-store.component.scss']
})
export class SimplonStoreComponent implements OnInit {
  games:Game[] = [];
  constructor(private apiGamesService:ApiGamesService) { }

  ngOnInit() {
    this.apiGamesService.getAll().subscribe( data => {
      this.games = data;
      
    })
  }

}
