import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GlobalDataEntity } from '../models/global-data-entity';
import { DatePipe } from '@angular/common';
import NewsAPI from 'ts-newsapi';
import { INewsApiResponse } from 'ts-newsapi/lib/types';

@Injectable({
  providedIn: 'root'
})
export class CoronavirusDataService {

  latestDate: string;

  private globalTimeSeriesDataURL = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv';

  private globalDailyReportsURL =  'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/06-09-2020.csv';

  constructor(
    private http: HttpClient,
    public datepipe: DatePipe
  ) { }

  getGlobalDailyData(): Observable<any> {
    return this.http.get(this.globalDailyReportsURL, { responseType: 'text'}).pipe(
      map(latestGlobalReport => {
        const globalDailyData = {};
        const reportRows = latestGlobalReport.split('\n'); // splitting the report into rows
        reportRows.splice(0, 1);  // removing the header row

        reportRows.forEach(row => {
          const columns = row.split(/,(?=\S)/);
          const currentCol: GlobalDataEntity = {
            country: columns[3],
            confirmedCases: +columns[7],
            deathCases: +columns[8],
            recoveredCases: +columns[9],
            activeCases: +columns[10]
          };

          const countryData: GlobalDataEntity = globalDailyData[currentCol.country];
          if (countryData) {
            countryData.confirmedCases += currentCol.confirmedCases;
            countryData.deathCases += currentCol.deathCases;
            countryData.recoveredCases += currentCol.recoveredCases;
            countryData.activeCases += currentCol.activeCases;
            globalDailyData[currentCol.country] = countryData;
          } else {
            globalDailyData[currentCol.country] = currentCol;
          }
        });

        return Object.values(globalDailyData) as GlobalDataEntity[];
      })
    );
  }

  async fetchGlobalNews() {
    const newsAPI = new NewsAPI('40926236d5bf44a68ac76c96144b2c9c');
    const topHeadlines = await newsAPI.getTopHeadlines({
      q: 'coronavirus',
      country: 'sg',
      pageSize: 10,
      page: 1,
    });

    console.log('Top Headline:', topHeadlines);
    return topHeadlines;
  }
}
