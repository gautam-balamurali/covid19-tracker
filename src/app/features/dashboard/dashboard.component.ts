import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { DashboardContentModel } from 'src/app/models';
import { HistoricalStatisticsComponent, StatisticsChartsComponent } from '.';

/**
 * DashboardComponent component acts as a generic component to render dashboard contents
 */
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  @Input() chartsReady = false;

  content: DashboardContentModel;

  @ViewChild('statisticsCharts')
  statisticsCharts: StatisticsChartsComponent;
  @ViewChild('historicalStatistics')
  historicalStatistics: HistoricalStatisticsComponent;

  contentSubscription: Subscription;

  constructor(public translate: TranslateService) {}

  ngOnInit(): void {
    this.resolveI18nContent();
  }

  /**
   * Resolves i18n content
   */
  resolveI18nContent() {
    this.contentSubscription = this.translate
      .get('dashboard')
      .subscribe((content) => (this.content = content));
  }

  /**
   * To re-render data on country change option
   * @param country
   */
  countryChange(country: string) {
    this.chartsReady = false;
    this.statisticsCharts.getCurrentStatisticsData(country);
    this.historicalStatistics.getHistoricalStatisticsData(country);
  }

  ngOnDestroy(): void {
    this.contentSubscription?.unsubscribe();
  }
}
