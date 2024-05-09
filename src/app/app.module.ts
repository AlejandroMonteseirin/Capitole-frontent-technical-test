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

@NgModule({
  declarations: [
    AppComponent,
    HeroesListComponent,
    HeroesTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule, //cards
    MatTableModule, //tables
    MatFormFieldModule, //form field (input filter)
    MatPaginatorModule, //paginator
    MatInputModule, //filter input
    MatProgressSpinnerModule //spinner when loading
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
