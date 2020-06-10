import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-statistics-card',
  templateUrl: './statistics-card.component.html',
  styleUrls: ['./statistics-card.component.css']
})
export class StatisticsCardComponent implements OnInit {

  @Input() totalConfirmedCases: string;
  @Input() totalDeathCases: string;
  @Input() totalRecoveredCases: string;
  @Input() totalActiveCases: string;
  constructor() { }

  ngOnInit(): void {
  }

}
