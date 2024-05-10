import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteConfirmationComponent } from './delete-confirmation.component';
import { AngularMaterialSharedModule } from 'src/app/modules/angular-material-shared.module';
import { HeroesEditionRoutingModule } from '../../heroes-edition/heroes-edition.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

describe('DeleteConfirmationComponent', () => {
  let component: DeleteConfirmationComponent;
  let fixture: ComponentFixture<DeleteConfirmationComponent>;

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
      ],
      providers: [{ provide: MatDialogRef, useValue: {} }, // Proporciona un objeto simulado para MatDialogRef
      { provide: MAT_DIALOG_DATA, useValue: {} } // Si el componente utiliza MAT_DIALOG_DATA, proporciona un objeto simulado para él también
      ],
      declarations: [DeleteConfirmationComponent]
    });
    fixture = TestBed.createComponent(DeleteConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
