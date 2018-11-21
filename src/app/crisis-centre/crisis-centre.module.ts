import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrisisCentreComponent } from './crisis-centre/crisis-centre.component';
import { CrisisCentreHomeComponent } from './crisis-centre-home/crisis-centre-home.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import {RouterModule,Routes} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule

  ],
  declarations: [CrisisCentreComponent, CrisisCentreHomeComponent, CrisisDetailComponent, CrisisListComponent]
})
export class CrisisCentreModule { }
