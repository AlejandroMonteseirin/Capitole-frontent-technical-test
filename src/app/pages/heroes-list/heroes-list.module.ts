import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesListComponent } from 'src/app/pages/heroes-list/heroes-list.component';
import { AngularMaterialSharedModule } from '../../modules/angular-material-shared/angular-material-shared.module';
import { HeroesTableComponent } from 'src/app/components/heroes-table/heroes-table.component';
import { FormsModule } from '@angular/forms';

// Custom Pipes
import { CapitalizeFirstPipe } from 'src/app/customPipes/capitalizeFirstPipe'; // Importa el pipe custom
import { HeroesListRoutingModule } from './heroes-list.routing.module';

console.log('HeroesListModule');

@NgModule({
  declarations: [HeroesListComponent, HeroesTableComponent, CapitalizeFirstPipe],
  imports: [
    CommonModule,
    AngularMaterialSharedModule,
    FormsModule, // ngModel
    HeroesListRoutingModule
  ]
})
export class HeroesListModule {
}
