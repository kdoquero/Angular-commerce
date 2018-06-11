import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../entities/game';
import { GiantBombGames } from '../entities/giant-bomb-games';

@Component({
  selector: 'app-showroom',
  templateUrl: './showroom.component.html',
  styleUrls: ['./showroom.component.scss']
})
export class ShowroomComponent implements OnInit {
  @Input() games: GiantBombGames

  constructor() { }

  ngOnInit() {
    this.games = this.getRandomArrayElements(this.games,5)
    

  }


  private getRandomArrayElements(arr, count) {
    let randomGames = arr.slice(0), i = arr.length, min = i - count, temp, index;
    while (i-- > min) {
      index = Math.floor((i + 1) * Math.random());
      temp = randomGames[index];
      randomGames[index] = randomGames[i];
      randomGames[i] = temp;
    }
    return randomGames.slice(min);
  }
}
