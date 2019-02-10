import { Component, OnInit } from '@angular/core';
import { Heroes } from './mock-heroes';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero
  heroes = Heroes

  constructor() { }

  ngOnInit() {
  }

  onSelectHero(hero: Hero): void{
    this.selectedHero = hero;
  }
}
