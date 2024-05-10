import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesTableComponent } from './heroes-table.component';
import { AngularMaterialSharedModule } from 'src/app/modules/angular-material-shared.module';
import { FormsModule } from '@angular/forms';
import { HeroesListRoutingModule } from '../heroes-list/heroes-list.routing.module';
import { HeroesEditionRoutingModule } from '../heroes-edition/heroes-edition.routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('HeroesTableComponent', () => {
  let component: HeroesTableComponent;
  let fixture: ComponentFixture<HeroesTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AngularMaterialSharedModule,
        FormsModule, // ngModel
        HeroesListRoutingModule,
        AngularMaterialSharedModule,
        HeroesEditionRoutingModule,
        FormsModule, // ngModel
        MatGridListModule, // grid
        HttpClientModule, // http client
        RouterModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
      ],
      declarations: [HeroesTableComponent]
    });
    fixture = TestBed.createComponent(HeroesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
