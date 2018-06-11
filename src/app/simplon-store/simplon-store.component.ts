import { Component, OnInit,Input  } from '@angular/core';
import { Game } from '../entities/game';
import { ApiGamesService } from '../services/api-games.service';
import { IgbdGameService } from '../services/igbd-game.service';
import { GiantBombGames } from '../entities/giant-bomb-games';
import { GiantBomb } from '../entities/giant-bomb';
import { GiantBombApiService } from '../services/giant-bomb-api.service';

@Component({
  selector: 'app-simplon-store',
  templateUrl: './simplon-store.component.html',
  styleUrls: ['./simplon-store.component.scss']
})
export class SimplonStoreComponent implements OnInit {
  games:GiantBombGames[] = [];
  lastGames:GiantBombGames[];
  constructor(private apiGamesService:ApiGamesService,private giantBombApi: GiantBombApiService) { }

  ngOnInit() {
    // this.apiGamesService.getAll().subscribe( data => {
    //   this.games = data;

    // })

    let gamesReleased = localStorage.getItem('gamesreleased');
    if (gamesReleased) {
      let results:GiantBombGames[] = JSON.parse(gamesReleased)
      this.lastGames = results.slice(Math.max(results.length -5, 1))
      this.games = results
      console.log(this.games)
    } else {

      this.giantBombApi.getLastExpectedReleasePerPlatform(146).subscribe( data => {
          let results:GiantBomb;
          results = data;
          this.lastGames = results.results.slice(Math.max(results.results.length - 5, 1))
          this.games = results.results
          console.log(this.games)



      })
    }
  }


}
