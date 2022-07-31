import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DependenciesModule } from '../dependency-modules/dependencies.module';
import { FormatStringPipe, MonthNamePipe } from './pipes';
import { SearchListComponent } from './components';

@NgModule({
  declarations: [MonthNamePipe, SearchListComponent, FormatStringPipe],
  imports: [CommonModule, DependenciesModule],
  exports: [MonthNamePipe, SearchListComponent, FormatStringPipe],
})
export class SharedModule {}
