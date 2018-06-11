import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SimplonStoreComponent } from '../../simplon-store/simplon-store.component';
import { DetailsComponent } from '../../details/details.component';

const routes: Routes = [
  {path: '', component: SimplonStoreComponent},
  {path: 'details/:id', component: DetailsComponent}
  
];

@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(routes),

  ],
  exports:[ RouterModule ],
  declarations: []
})
export class RoutingModule { }
