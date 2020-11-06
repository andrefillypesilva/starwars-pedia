import { Component, OnInit } from '@angular/core';
import { ResultCard } from '../../../models/interfaces/result-card';

@Component({
  selector: 'app-result-search',
  templateUrl: './result-search.component.html'
})
export class ResultSearchComponent implements OnInit {

  public results: ResultCard[];

  constructor() { }

  ngOnInit(): void {
    this.results = [{
      title: 'A New Hope | Episode one',
      description: 'It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire. During the battle, Rebel spies managed to steal secret plans to the Empire\'s ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet. Pursued by the Empire\'s sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy....',
      options: ['Director: George Lucas', 'Producer: Gary Kurtz, Rick McCallum'],
      url: ''
    },
    {
      title: 'A New Hope | Episode one',
      description: 'It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire. During the battle, Rebel spies managed to steal secret plans to the Empire\'s ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet. Pursued by the Empire\'s sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy....',
      options: ['Director: George Lucas', 'Producer: Gary Kurtz, Rick McCallum'],
      url: ''
    },
    {
      title: 'A New Hope | Episode one',
      description: 'It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire. During the battle, Rebel spies managed to steal secret plans to the Empire\'s ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet. Pursued by the Empire\'s sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy....',
      options: ['Director: George Lucas', 'Producer: Gary Kurtz, Rick McCallum'],
      url: ''
    },
    {
      title: 'A New Hope | Episode one',
      description: 'It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire. During the battle, Rebel spies managed to steal secret plans to the Empire\'s ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet. Pursued by the Empire\'s sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy....',
      options: ['Director: George Lucas', 'Producer: Gary Kurtz, Rick McCallum'],
      url: ''
    },
    {
      title: 'A New Hope | Episode one',
      description: 'It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire. During the battle, Rebel spies managed to steal secret plans to the Empire\'s ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet. Pursued by the Empire\'s sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy....',
      options: ['Director: George Lucas', 'Producer: Gary Kurtz, Rick McCallum'],
      url: ''
    }];
  }

}
