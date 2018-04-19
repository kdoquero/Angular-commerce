import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../entities/game';

@Component({
  selector: 'app-showroom',
  templateUrl: './showroom.component.html',
  styleUrls: ['./showroom.component.scss']
})
export class ShowroomComponent implements OnInit {
  @Input() games:Game[]

  constructor() { }

  ngOnInit() {
  }

}
