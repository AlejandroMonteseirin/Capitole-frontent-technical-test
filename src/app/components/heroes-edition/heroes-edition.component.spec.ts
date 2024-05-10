import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesEditionComponent } from './heroes-edition.component';
import { AngularMaterialSharedModule } from 'src/app/modules/angular-material-shared.module';
import { HeroesEditionRoutingModule } from './heroes-edition.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

describe('HeroesEditionComponent', () => {
  let component: HeroesEditionComponent;
  let fixture: ComponentFixture<HeroesEditionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularMaterialSharedModule,
        HeroesEditionRoutingModule,
        FormsModule, // ngModel
        MatGridListModule, // grid
        ReactiveFormsModule, // reactive forms
        RouterModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule, // http client

      ],
      declarations: [HeroesEditionComponent]
    });
    fixture = TestBed.createComponent(HeroesEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
