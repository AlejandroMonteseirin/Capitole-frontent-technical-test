import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesEditionComponent } from 'src/app/components/heroes-edition/heroes-edition.component';
import { AngularMaterialSharedModule } from '../angular-material-shared/angular-material-shared.module';



@NgModule({
  declarations: [HeroesEditionComponent],
  imports: [
    CommonModule,
    AngularMaterialSharedModule
  ]
})
export class HeroesEditionModule { }
