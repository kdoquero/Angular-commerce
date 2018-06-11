import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { GiantBombGames } from '../entities/giant-bomb-games';

@Component({
  selector: 'app-slick-slider-showroom',
  templateUrl: './slick-slider-showroom.component.html',
  styleUrls: ['./slick-slider-showroom.component.scss']
})
export class SlickSliderShowroomComponent implements OnInit {
  @Input() games: GiantBombGames
  $element: any;
  slideConfig:Object = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  }

  constructor(private element: ElementRef) { }

  ngOnInit() {
    this.games = this.getRandomArrayElements(this.games, 25)


  }
  AfterViewInit() {


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
  afterChange(e) {
    console.log('afterChange');
  }
}
