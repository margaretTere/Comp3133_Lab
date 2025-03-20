import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { RemoveSpacesPipe } from '../remove-spaces.pipe';
import { InputFormatDirective } from '../input-format.directive';

interface Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [NgFor, HeroDetailComponent, RemoveSpacesPipe, InputFormatDirective],
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes: Hero[] = [
    { id: 1, name: 'Iron-Man' },
    { id: 2, name: 'Spider-Man' },
    { id: 3, name: 'Black-Panther' }
  ];

  selectedHero?: Hero;
}
