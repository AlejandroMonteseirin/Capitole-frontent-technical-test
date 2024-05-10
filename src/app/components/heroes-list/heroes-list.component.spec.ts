import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesListComponent } from './heroes-list.component';
import { AngularMaterialSharedModule } from 'src/app/modules/angular-material-shared.module';
import { HeroesEditionRoutingModule } from '../heroes-edition/heroes-edition.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { HeroesTableComponent } from '../heroes-table/heroes-table.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserModule, By } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from 'src/app/app.component';

describe('HeroesListComponent', () => {
  let component: HeroesListComponent;
  let fixture: ComponentFixture<HeroesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AngularMaterialSharedModule,
        HeroesEditionRoutingModule,
        FormsModule, // ngModel
        MatGridListModule, // grid
        ReactiveFormsModule,
        HttpClientModule, // http client
        RouterModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,

      ],
      declarations: [HeroesListComponent, HeroesTableComponent]
    });
    fixture = TestBed.createComponent(HeroesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have mat-card-title with "Heroes List and Filter"', () => {
    const cardTitleElement = fixture.debugElement.query(By.css('mat-card-title'));
    expect(cardTitleElement).toBeTruthy(); // Verifica que el elemento mat-card-title existe

    const cardTitleText = cardTitleElement.nativeElement.textContent.trim();
    expect(cardTitleText).toEqual('Heroes List and Filter'); // Verifica el texto del elemento mat-card-title
  });

});
