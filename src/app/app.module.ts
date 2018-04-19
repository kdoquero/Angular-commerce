import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';


import { AppComponent } from './app.component';
import { SimplonStoreComponent } from './simplon-store/simplon-store.component';
import { SimplonNavComponent } from './simplon-nav/simplon-nav.component';
import { LastReleasedComponent } from './last-released/last-released.component';
import { CartComponent } from './cart/cart.component';
import { Platform1Component } from './platform-1/platform-1.component';
import { FooterComponent } from './footer/footer.component';
import { Platform2Component } from './platform-2/platform-2.component';
import { Platform3Component } from './platform-3/platform-3.component';
import { Platform4Component } from './platform-4/platform-4.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DaoGame } from './entities/dao/dao-game';
import {MatListModule} from '@angular/material/list';
import { ApiGamesService } from './services/api-games.service';
import { ShowroomComponent } from './showroom/showroom.component';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()

@NgModule({
  declarations: [
    AppComponent,
    SimplonStoreComponent,
    SimplonNavComponent,
    LastReleasedComponent,
    CartComponent,
    Platform1Component,
    FooterComponent,
    Platform2Component,
    Platform3Component,
    Platform4Component,
    ShowroomComponent
  ],
  imports: [
    BrowserModule,NgbModule.forRoot(),
    MatListModule,FormsModule,HttpClientModule
  ],
  providers: [HttpClient,ApiGamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
