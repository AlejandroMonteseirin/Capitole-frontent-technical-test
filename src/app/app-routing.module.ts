import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo: 'heroesList', pathMatch: 'full' },
  { path: 'heroesList', loadChildren: () => import('./modules/heroes-list.module').then(m => m.HeroesListModule) },
  { path: 'heroesEdit/:idHero', loadChildren: () => import('./modules/heroes-edition.module').then(m => m.HeroesEditionModule) },
  { path: 'heroesNew', loadChildren: () => import('./modules/heroes-edition.module').then(m => m.HeroesEditionModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
