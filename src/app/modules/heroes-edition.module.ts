import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesEditionComponent } from 'src/app/components/heroes-edition/heroes-edition.component';
import { AngularMaterialSharedModule } from './angular-material-shared.module';
import { HeroesEditionRoutingModule } from '../components/heroes-edition/heroes-edition.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';



@NgModule({
  declarations: [HeroesEditionComponent],
  imports: [
    CommonModule,
    AngularMaterialSharedModule,
    HeroesEditionRoutingModule,
    FormsModule, // ngModel
    MatGridListModule, // grid
    ReactiveFormsModule, // reactive forms

  ]
})
export class HeroesEditionModule { }
