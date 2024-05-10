import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesEditionComponent } from './heroes-edition.component';


const routes: Routes = [
    { path: '', component: HeroesEditionComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HeroesEditionRoutingModule { }