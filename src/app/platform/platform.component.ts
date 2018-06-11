import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.scss']
})
export class PlatformComponent implements OnInit {
  @Input() game
  constructor() { }

  ngOnInit() {
  }

}
