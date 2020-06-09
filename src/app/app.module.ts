import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { PandemicHomeComponent } from './components/pandemic-home/pandemic-home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NovelCoronavirusComponent } from './components/novel-coronavirus/novel-coronavirus.component';

@NgModule({
  declarations: [
    AppComponent,
    PandemicHomeComponent,
    NavbarComponent,
    NovelCoronavirusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
