import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule, // cards
    MatTableModule, // tables
    MatFormFieldModule, // form field (input filter)
    MatPaginatorModule, // paginator
    MatInputModule, // filter input
    MatProgressSpinnerModule, // spinner when loading
    MatSortModule, // sort in the table
    MatSnackBarModule, // notifications
    MatButtonModule, // buttons
    MatIconModule, // icons
    MatDialogModule, // dialog
    MatGridListModule, // grid

  ],
  exports: [
    CommonModule,
    MatCardModule, // cards
    MatTableModule, // tables
    MatFormFieldModule, // form field (input filter)
    MatPaginatorModule, // paginator
    MatInputModule, // filter input
    MatProgressSpinnerModule, // spinner when loading
    MatSortModule, // sort in the table
    MatSnackBarModule, // notifications
    MatButtonModule, // buttons
    MatIconModule, // icons
    MatDialogModule, // dialog
    MatGridListModule, // grid

  ],
  providers: [{ provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 1000 } },
  ]
})
export class AngularMaterialSharedModule { }
