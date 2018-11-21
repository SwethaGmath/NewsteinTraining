import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of heroes';
  //childEmitter(name:string){
    //alert('Vaule passed from Child to parent' + name);
    condition = true;
  }
