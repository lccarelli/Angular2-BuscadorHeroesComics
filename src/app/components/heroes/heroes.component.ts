import { Component, OnInit } from '@angular/core';
import {HeroesService, Heroe} from '../../services/heroes.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[]=[];

  constructor(public _heroesService: HeroesService,
              public router:Router
  ) {}

  ngOnInit() {

    this.heroes = this._heroesService.getHeroes();

    // console.log(this.heroes);

  }
      verHeroe(idx:number) {
        this.router.navigate ( ['/heroe',idx] );
        console.log(idx);
      }
}
