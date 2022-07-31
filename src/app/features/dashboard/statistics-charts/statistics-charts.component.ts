import { Platform } from '@angular/cdk/platform';
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GoogleChartInterface, GoogleChartType } from 'ng2-google-charts';
import { Subscription } from 'rxjs';
import { DashboardConfig, GlobalConfig } from 'src/app/config/app.config';
import { DashboardService } from 'src/app/core';
import { DashboardContentModel } from 'src/app/models';

/**
 * StatisticsChartsComponent component to display statistics charts and maps
 */
@Component({
  selector: 'app-statistics-charts',
  templateUrl: './statistics-charts.component.html',
  styleUrls: ['./statistics-charts.component.scss'],
})
export class StatisticsChartsComponent implements OnInit, OnDestroy {
  @Input() chartsReady: boolean = false;
  @Input() content: DashboardContentModel;
  @Output() chartsReadyChange = new EventEmitter<boolean>();

  geoChart: GoogleChartInterface = {
    chartType: GoogleChartType.GeoChart,
    dataTable: DashboardConfig.GoogleChartTypeDataTable,
    options: DashboardConfig.GeoChartTypeOptions,
  };

  pieChart: GoogleChartInterface = {
    chartType: GoogleChartType.PieChart,
    dataTable: DashboardConfig.GoogleChartTypeDataTable,
    options: DashboardConfig.PieChartTypeOptions,
  };

  dashboardServiceSubscription: Subscription;

  constructor(
    public platform: Platform,
    public dashboardService: DashboardService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    if (this.platform.IOS || this.platform.ANDROID) {
      this.pieChart.options = DashboardConfig.PieChartTypeMobileBrowserOptions;
      this.geoChart.options.height = '150';
    } else if (this.platform.isBrowser) {
      this.geoChart.options.height = '500';
      this.pieChart.options = DashboardConfig.PieChartTypeOptions;
    }
    this.getCurrentStatisticsData();
  }

  /**
   * Gets current statistics data
   * @param [country]
   */
  getCurrentStatisticsData(country?) {
    this.chartsReady = false;
    this.chartsReadyChange.emit(this.chartsReady);
    this.dashboardServiceSubscription = this.dashboardService
      .getCurrentStatistics(country)
      .subscribe({
        next: (response) => {
          try {
            let data = response.response
              .filter((data: any) => data.continent != data.country)
              .map((data: any) => [
                data.country == DashboardConfig.USA
                  ? DashboardConfig.United_States
                  : data.country == DashboardConfig.UAE
                  ? DashboardConfig.United_Arab_Emirates
                  : data.country,
                data.cases.total || 0,
              ]);
            this.geoChart.dataTable = [this.geoChart.dataTable[0], ...data];
            this.pieChart.dataTable = [this.pieChart.dataTable[0], ...data];
            this.chartsReady = true;
            this.chartsReadyChange.emit(this.chartsReady);
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
    this._snackBar.open(GlobalConfig.SnackBarErrorMessage);
    console.error(error);
  }

  ngOnDestroy(): void {
    this.dashboardServiceSubscription?.unsubscribe();
  }
}
