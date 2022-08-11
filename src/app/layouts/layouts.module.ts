import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DependenciesModule } from '../dependency-modules/dependencies.module';
import {
  AppLayoutComponent,
  FooterComponent,
  HeaderComponent,
  MainComponent,
} from '.';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AppLayoutComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
  ],
  imports: [CommonModule, RouterModule, DependenciesModule, SharedModule],
})
export class LayoutsModule {}
