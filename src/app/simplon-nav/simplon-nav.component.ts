import { Component, OnInit } from '@angular/core';
import { Game } from '../entities/game';
import { DaoGame } from '../entities/dao/dao-game';


@Component({
  selector: 'app-simplon-nav',
  templateUrl: './simplon-nav.component.html',
  styleUrls: ['./simplon-nav.component.scss']
})
export class SimplonNavComponent implements OnInit {

  constructor() { }
  lastGames:Game[];

  ngOnInit() {
  }

  lastItems() {
    this.lastGames.slice(Math.max(this.lastGames.length - 5, 1))
  }
  add() {
  
  }

}
