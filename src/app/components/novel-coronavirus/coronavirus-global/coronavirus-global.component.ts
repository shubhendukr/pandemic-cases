import { Component, OnInit } from '@angular/core';
import { CoronavirusDataService } from '../services/coronavirus-data.service';
import { GlobalDataEntity } from '../models/global-data-entity';

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

  constructor(private coronavirusDataService: CoronavirusDataService) { }

  ngOnInit(): void {
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
        this.initCasesCountDisplayValue();
      }
    });
  }

  private initCasesCountDisplayValue() {
    this.globalConfirmedCasesCSV = this.globalConfirmedCases.toLocaleString();
    this.globalDeathCasesCSV = this.globalDeathCases.toLocaleString();
    this.globalRecoveredCasesCSV = this.globalRecoveredCases.toLocaleString();
    this.globalActiveCasesCSV = this.globalActiveCases.toLocaleString();
  }

}
