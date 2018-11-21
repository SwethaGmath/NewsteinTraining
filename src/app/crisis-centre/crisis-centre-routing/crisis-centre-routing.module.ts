import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrisisCentreComponent } from '../crisis-centre/crisis-centre.component';
import { CrisisCentreHomeComponent } from '../crisis-centre-home/crisis-centre-home.component';
import { CrisisDetailComponent } from '../crisis-detail/crisis-detail.component';
import { CrisisListComponent } from '../crisis-list/crisis-list.component';
import {RouterModule,Routes} from '@angular/router';

const crisisCenterRoutes: Routes = [
   { path: 'crisis-center', component: CrisisCentreComponent, 
   children: [ { path: '', component: CrisisListComponent,
     children: [ { path: ':id', component: CrisisDetailComponent }, 
                  { path: '', component: CrisisCentreHomeComponent } ] 
                } ]
               }
               ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot( crisisCenterRoutes, { enableTracing: true })
  ],
  declarations: [],
  exports:[RouterModule]
})
export class CrisisCentreRoutingModule { }
