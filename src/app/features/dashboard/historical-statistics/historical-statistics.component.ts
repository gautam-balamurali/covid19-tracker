import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { GlobalConfig } from 'src/app/config/app.config';
import { DashboardService } from 'src/app/core';
import { DashboardContentModel, HistoricalMonthType } from 'src/app/models';

/**
 * HistoricalStatisticsComponent component to display history statistics
 */
@Component({
  selector: 'app-historical-statistics',
  templateUrl: './historical-statistics.component.html',
  styleUrls: ['./historical-statistics.component.scss'],
})
export class HistoricalStatisticsComponent implements OnInit {
  @Input() chartsReady: boolean = false;
  @Input() content: DashboardContentModel;
  @Output() chartsReadyChange = new EventEmitter<boolean>();

  historicalMonthlyData: HistoricalMonthType[] = [];

  loader: boolean = false;

  dashboardServiceSubscription: Subscription;

  constructor(
    public dashboardService: DashboardService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getHistoricalStatisticsData();
  }

  /**
   * Gets historical statistics data
   * @param [country]
   */
  getHistoricalStatisticsData(country?: string) {
    this.loader = true;
    this.dashboardServiceSubscription = this.dashboardService
      .getHistoricalStatistics(country)
      .subscribe({
        next: (response) => {
          try {
            let data = response.response
              .filter(
                (data: any) =>
                  new Date().getFullYear().toString() == data.day.split('-')[0]
              )
              .reduce((pre: any, val: any) => {
                let m = val.day.split('-')[1];
                pre[m]
                  ? (pre[m].value += Number(
                      val.cases.new ? val.cases.new.replace('+', '') : 0
                    ))
                  : (pre[m] = {
                      month: String(m),
                      value: Number(
                        val.cases.new ? val.cases.new.replace('+', '') : 0
                      ),
                    });
                return pre;
              }, {});
            let sortByMount = Object.values(data).sort((a: any, b: any) => {
              return a.month - b.month;
            });
            this.historicalMonthlyData = sortByMount as any;
            this.loader = false;
          } catch (error) {
            this.showSnackBar(error);
          }
        },
        error: (error) => {
          this.showSnackBar(error);
        },
      });
  }

  /**
   * Shows snack bar to handle error response
   * @param error
   */
  showSnackBar(error) {
    this.chartsReady = false;
    this.chartsReadyChange.emit(this.chartsReady);
    this.loader = false;
    this._snackBar.open(GlobalConfig.SnackBarErrorMessage);
    console.error(error);
  }

  ngOnDestroy(): void {
    this.dashboardServiceSubscription?.unsubscribe();
  }
}
