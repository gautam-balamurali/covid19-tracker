import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DependenciesModule } from '../dependency-modules/dependencies.module';
import { SharedModule } from '../shared/shared.module';
import {
  CountriesListDropdownComponent,
  HistoricalStatisticsComponent,
  StatisticsChartsComponent,
} from './dashboard';
import { DashboardComponent, UnauthorizedComponent } from '.';

@NgModule({
  declarations: [
    DashboardComponent,
    HistoricalStatisticsComponent,
    UnauthorizedComponent,
    CountriesListDropdownComponent,
    StatisticsChartsComponent,
  ],
  imports: [CommonModule, DependenciesModule, SharedModule],
})
export class FeaturesModule {}
