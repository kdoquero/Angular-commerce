import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { Game } from '../entities/game';
import { ApiGamesService } from '../services/api-games.service';
import { Input } from '@angular/core';


@Component({
  selector: 'app-last-released',
  templateUrl: './last-released.component.html',
  styleUrls: ['./last-released.component.scss']
})
export class LastReleasedComponent implements OnInit {

  constructor(private apiGamesService:ApiGamesService) {}
  @Input() games:Game[]
  latestGames:Game[]
  
 

  ngOnInit() {
    this.apiGamesService.getAll().subscribe( data => {
      data = data.slice(Math.max(data.length - 5, 1))
      this.latestGames = data;
      
    })
   
   
  }

  

}
