import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

interface Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [NgIf],
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  @Input() hero?: Hero;
}
