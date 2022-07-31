import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DependenciesModule } from '../dependency-modules/dependencies.module';
import { MonthNamePipe } from './pipes';
import { SearchListComponent } from './components';

@NgModule({
  declarations: [MonthNamePipe, SearchListComponent],
  imports: [CommonModule, DependenciesModule],
  exports: [MonthNamePipe, SearchListComponent],
  providers: [MonthNamePipe],
})
export class SharedModule {}
