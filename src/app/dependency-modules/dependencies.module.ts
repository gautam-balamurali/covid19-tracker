import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const Dependencies = [
  MatToolbarModule,
  MatSnackBarModule,
  MatSelectModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  FormsModule,
  ReactiveFormsModule,
  MatAutocompleteModule,
  Ng2GoogleChartsModule,
  FlexLayoutModule,
  NgxSkeletonLoaderModule.forRoot(),
];

@NgModule({
  declarations: [],
  imports: [CommonModule, Dependencies],
  exports: [Dependencies],
})
export class DependenciesModule {}
