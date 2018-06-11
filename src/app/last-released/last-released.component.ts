import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { Game } from '../entities/game';
import { ApiGamesService } from '../services/api-games.service';
import { GiantBombApiService } from '../services/giant-bomb-api.service';
import { IgbdGameService } from '../services/igbd-game.service';
import { GiantBomb } from '../entities/giant-bomb';
import { GiantBombGames } from '../entities/giant-bomb-games';



@Component({
  selector: 'app-last-released',
  templateUrl: './last-released.component.html',
  styleUrls: ['./last-released.component.scss']
})

export class LastReleasedComponent implements OnInit {

  constructor(private apiGamesService:ApiGamesService,private giantBombApi : GiantBombApiService) {

  }
  @Input() latestGames:GiantBombGames[]



  ngOnInit() {
    // this.apiGamesService.getAll().subscribe( data => {
    //   data = data.slice(Math.max(data.length - 5, 1))
    //   this.latestGames = data;

    // })

    // let gamesReleased = localStorage.getItem('gamesreleased');
    // if (gamesReleased) {
    //   let results:GiantBombGames[] = JSON.parse(gamesReleased)
    //   this.latestGames = results.slice(Math.max(results.length -5, 1))
    //   console.log(this.latestGames)
    // } else {

    //   this.giantBombApi.getLastExpectedReleasePerPlatform(146).subscribe( data => {
    //       let results:GiantBomb;
    //       results = data;
    //       this.latestGames = results.results.slice(Math.max(results.results.length - 5, 1))
    //       console.log(this.latestGames)



    //   })
    // }




  }



}
