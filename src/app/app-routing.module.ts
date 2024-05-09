import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesListComponent } from './pages/heroes-list/heroes-list.component';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./pages/heroes-list/heroes-list.module').then(m => m.HeroesListModule)
  },
  {
    path: 'heroesEdit/:idHero',
    loadChildren: () => import('./modules/heroes-edition/heroes-edition.module').then(m => m.HeroesEditionModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
