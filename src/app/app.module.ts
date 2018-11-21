import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { AppHighlightDirective } from './app-highlight.directive';
import { TextColorDirective } from './text-color.directive';
import { UnlessDirective } from './unless.directive';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { CreateEmployeeComponent } from './Employee/create-employee.component';
import { ListEmployeeComponent } from './Employee/list-employee.component';
import {AppRoutingModule } from '../app/app-routing/app-routing.module'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {CrisisCentreModule} from '../app/crisis-centre/crisis-centre.module';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    AppHighlightDirective,
    TextColorDirective,
    UnlessDirective,
    ReactiveFormsComponent,
    FormGroupComponent,
    RegistrationFormComponent,
    CreateEmployeeComponent,
    ListEmployeeComponent,
    PageNotFoundComponent,
    
    
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CrisisCentreModule


  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
