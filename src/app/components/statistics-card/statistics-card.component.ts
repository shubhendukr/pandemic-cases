import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-statistics-card',
  templateUrl: './statistics-card.component.html',
  styleUrls: ['./statistics-card.component.css']
})
export class StatisticsCardComponent implements OnInit {

  @Input() totalConfirmedCases: number;
  @Input() totalDeathCases: number;
  @Input() totalRecoveredCases: number;
  @Input() totalActiveCases: number;
  constructor() { }

  ngOnInit(): void {
  }

}
