import { Component, OnInit, Input } from '@angular/core';
import {Router,ActivatedRoute,ParamMap} from '@angular/router';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes'
import { parse } from 'querystring';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero : Hero;
  constructor(private route: ActivatedRoute, private router: Router ) {

   }

  heroes = HEROES;

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('x');
    alert(id);
    // for(let x=0 ; x < this.heroes.length; x++ )
    // {
    //   if(this.heroes[x].id == parseInt(id) )
    //   {
    //     this.hero = this.heroes[x];
    //   }
    // }

   this.hero =  this.heroes.filter(item=> item.id == parseInt(id))[0]
    
    }
 stringColor = 'pink';
}
