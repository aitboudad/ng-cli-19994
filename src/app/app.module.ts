import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NoConflictStyleCompatibilityMode } from '@angular/material/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    { ngModule: NoConflictStyleCompatibilityMode },
    RouterModule.forRoot([{
      path: '', loadChildren: './home/home.module#HomeModule'
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
