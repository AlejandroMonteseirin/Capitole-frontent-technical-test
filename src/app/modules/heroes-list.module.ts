import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialSharedModule } from './angular-material-shared.module';
import { HeroesTableComponent } from 'src/app/components/heroes-table/heroes-table.component';
import { FormsModule } from '@angular/forms';

// Custom Pipes
import { CapitalizeFirstPipe } from 'src/app/customPipes/capitalizeFirstPipe'; // Importa el pipe custom


import { HeroesListRoutingModule } from '../components/heroes-list/heroes-list.routing.module';
import { DeleteConfirmationComponent } from '../components/dialogs/delete-confirmation/delete-confirmation.component';
import { HeroesListComponent } from 'src/app/components/heroes-list/heroes-list.component';

console.log('HeroesListModule');

@NgModule({
  declarations: [HeroesListComponent, HeroesTableComponent, CapitalizeFirstPipe, DeleteConfirmationComponent],
  imports: [
    CommonModule,
    AngularMaterialSharedModule,
    FormsModule, // ngModel
    HeroesListRoutingModule
  ]
})
export class HeroesListModule {
}
