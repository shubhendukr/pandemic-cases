import { Component, OnInit } from '@angular/core';
import { CoronavirusDataService } from '../services/coronavirus-data.service';
import { GlobalDataEntity } from '../models/global-data-entity';
import { GoogleChartInterface } from 'ng2-google-charts';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-coronavirus-global',
  templateUrl: './coronavirus-global.component.html',
  styleUrls: ['./coronavirus-global.component.css']
})
export class CoronavirusGlobalComponent implements OnInit {

  globalCOVID19Data: GlobalDataEntity[];
  globalConfirmedCases = 0;
  globalDeathCases = 0;
  globalRecoveredCases = 0;
  globalActiveCases = 0;
  globalConfirmedCasesCSV: string;
  globalDeathCasesCSV: string;
  globalRecoveredCasesCSV: string;
  globalActiveCasesCSV: string;

  geoChartDataTable = [];
  geoChartData: GoogleChartInterface = {
    chartType: 'GeoChart',
  };

  newsImageURL = '';
  newsTitle = '';
  newsDescription = '';
  newsPublishedAt = '';

  constructor(private coronavirusDataService: CoronavirusDataService) { }

  ngOnInit(): any {
    this.coronavirusDataService.getGlobalDailyData().subscribe({
      next: (latestGlobalReport) => {
        this.globalCOVID19Data = latestGlobalReport;
        latestGlobalReport.forEach((country: GlobalDataEntity) => {
          if (!Number.isNaN(country.confirmedCases)) {
            this.globalConfirmedCases += country.confirmedCases;
            this.globalDeathCases += country.deathCases;
            this.globalRecoveredCases += country.recoveredCases;
            this.globalActiveCases += country.activeCases;
          }
        });
        this.initStatisticsCountValue();
        this.drawCoronavirusGeoChart();
        this.setGlobalNewsCard();
      }
    });
  }

  private initStatisticsCountValue() {
    this.globalConfirmedCasesCSV = this.globalConfirmedCases.toLocaleString();
    this.globalDeathCasesCSV = this.globalDeathCases.toLocaleString();
    this.globalRecoveredCasesCSV = this.globalRecoveredCases.toLocaleString();
    this.globalActiveCasesCSV = this.globalActiveCases.toLocaleString();
  }

  private drawCoronavirusGeoChart() {
    this.geoChartDataTable.push(['Country', 'Confirmed Cases']);
    this.globalCOVID19Data.forEach(row => {
      this.geoChartDataTable.push([row.country, row.confirmedCases]);
    });

    this.geoChartData = {
      chartType: 'GeoChart',
      dataTable: this.geoChartDataTable,
    };
  }

  private setGlobalNewsCard() {
    const globalNewsPromise = this.coronavirusDataService.fetchGlobalNews();
    globalNewsPromise.then((globalNews) => {
      const articles: any[] = globalNews.articles;
      const firstArticle = articles[0];
      this.newsImageURL = firstArticle.urlToImage;
      this.newsTitle = firstArticle.title;
      this.newsDescription = firstArticle.description;
      this.newsPublishedAt = firstArticle.publishedAt;
      console.log('Image URL:', this.newsImageURL);
    });
  }
}
