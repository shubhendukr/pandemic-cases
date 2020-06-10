import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { PandemicHomeComponent } from './components/pandemic-home/pandemic-home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CoronavirusGlobalComponent } from './components/novel-coronavirus/coronavirus-global/coronavirus-global.component';
import { CoronavirusCountryComponent } from './components/novel-coronavirus/coronavirus-country/coronavirus-country.component';
import { StatisticsCardComponent } from './components/statistics-card/statistics-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PandemicHomeComponent,
    NavbarComponent,
    CoronavirusGlobalComponent,
    CoronavirusCountryComponent,
    StatisticsCardComponent
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
