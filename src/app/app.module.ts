import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
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
import {MatListModule} from '@angular/material/list';
import { ApiGamesService } from './services/api-games.service';
import { ShowroomComponent } from './showroom/showroom.component';
import { PlatformComponent } from './platform/platform.component';
import { IgbdGameService } from './services/igbd-game.service';
import { GiantBombApiService } from './services/giant-bomb-api.service';
import { RoutingModule } from './router/routing/routing.module';
import { DetailsComponent } from './details/details.component';
import { ProductCarouselComponent } from './product-carousel/product-carousel.component';
import { SlickSliderShowroomComponent } from './slick-slider-showroom/slick-slider-showroom.component';
import * as $ from 'jquery';
import 'slick-carousel';
import { SlickModule} from 'ngx-slick'


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
    ShowroomComponent,
    PlatformComponent,
    DetailsComponent,
    ProductCarouselComponent,
    SlickSliderShowroomComponent
  ],
  imports: [
    BrowserModule,NgbModule.forRoot(),SlickModule.forRoot(),
    MatListModule,FormsModule,HttpClientModule,HttpClientJsonpModule, RoutingModule,RoutingModule
  ],
  providers: [HttpClient,ApiGamesService,IgbdGameService, GiantBombApiService,HttpClientJsonpModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
