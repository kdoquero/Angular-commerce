import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../entities/game';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  @Input() game
  constructor(route: ActivatedRoute) {
    route.params.subscribe( value => {
      console.log(value)
    })
  }
  
  ngOnInit() {
  }

}
