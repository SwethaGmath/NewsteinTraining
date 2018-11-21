import { Component, OnInit } from '@angular/core';
//import { Employee } from '../../employee'
import { Hero } from '../hero'
import { HEROES } from '../mock-heroes'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
//@Input() heroDetails: string;
//@Output() childName = new EventEmitter<string>();

// hero : Hero = {
//   id:1,
//   name : "Windstorm"
// };

heroes = HEROES;
selectedHero : Hero;
onSelect(hero: Hero): void{
  this.selectedHero = hero;
}
backGroundColor = 'red';
color = 'orange';

  constructor() { }

  ngOnInit() {}

   
}

