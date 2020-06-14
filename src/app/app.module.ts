import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PandemicHomeComponent } from './components/pandemic-home/pandemic-home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CoronavirusGlobalComponent } from './components/novel-coronavirus/coronavirus-global/coronavirus-global.component';
import { CoronavirusCountryComponent } from './components/novel-coronavirus/coronavirus-country/coronavirus-country.component';
import { StatisticsCardComponent } from './components/statistics-card/statistics-card.component';
import { HttpClientModule } from '@angular/common/http';
import { StatisticsTableComponent } from './components/statistics-table/statistics-table.component';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    PandemicHomeComponent,
    NavbarComponent,
    CoronavirusGlobalComponent,
    CoronavirusCountryComponent,
    StatisticsCardComponent,
    StatisticsTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    Ng2GoogleChartsModule,
  ],
  providers: [
    DatePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
