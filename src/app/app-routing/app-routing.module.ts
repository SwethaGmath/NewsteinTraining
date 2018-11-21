import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from '../heroes/heroes.component';

import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { AppHighlightDirective } from '../app-highlight.directive';
import {RouterModule,Routes} from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import {CrisisCentreComponent} from '../crisis-centre/crisis-centre/crisis-centre.component'

const appRoutes: Routes = [ 
  {path: 'hero', component: HeroesComponent },
   { path: 'heroDetail/:x', component: HeroDetailComponent },
   {path: 'appHighlight', component: AppHighlightDirective},
   {path: 'crisis-centre', component:CrisisCentreComponent},
   { path: '', redirectTo: '/hero', pathMatch: 'full' },
   {path: '**', component: PageNotFoundComponent },
   
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot( appRoutes, { enableTracing: true }) // <-- debugging purposes only )
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
