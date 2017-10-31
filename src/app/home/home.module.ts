import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material';

import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule.forChild([{
      path: '', component: HomeComponent
    }])
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
