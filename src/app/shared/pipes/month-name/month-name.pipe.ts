import { Pipe, PipeTransform } from '@angular/core';
import { DashboardConfig } from 'src/app/config/app.config';

/**
 * MonthNamePipe pipe component to return and format month name
 */
@Pipe({
  name: 'monthName',
})
export class MonthNamePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    let months = DashboardConfig.MonthsList;
    let monthName = months[Number(value) - 1];
    return monthName;
  }
}
