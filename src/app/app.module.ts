import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroesListComponent } from './pages/heroes-list/heroes-list.component';

import { HeroesTableComponent } from './components/heroes-table/heroes-table.component';

// Angular Material
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

// Custom Pipes
import { CapitalizeFirstPipe } from 'src/app/customPipes/capitalizeFirstPipe'; // Importa el pipe


@NgModule({
  declarations: [
    AppComponent,
    HeroesListComponent,
    HeroesTableComponent,
    CapitalizeFirstPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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
    FormsModule // ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
