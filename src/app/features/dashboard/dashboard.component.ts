import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { HistoricalStatisticsComponent, StatisticsChartsComponent } from '.';

/**
 * DashboardComponent component acts as a generic component to render dashboard contents
 */
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  @Input() chartsReady = false;

  @ViewChild('statisticsCharts')
  statisticsCharts: StatisticsChartsComponent;
  @ViewChild('historicalStatistics')
  historicalStatistics: HistoricalStatisticsComponent;

  constructor() {}

  ngOnInit(): void {}

  /**
   * To re-render data on country change option
   * @param country
   */
  countryChange(country: string) {
    this.chartsReady = false;
    this.statisticsCharts.getCurrentStatisticsData(country);
    this.historicalStatistics.getHistoricalStatisticsData(country);
  }
}
