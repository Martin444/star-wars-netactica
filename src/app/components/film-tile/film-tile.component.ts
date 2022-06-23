import { Component, Input, OnInit } from '@angular/core';
import { Filme } from 'src/app/models/films.model';

@Component({
  selector: 'app-film-tile',
  templateUrl: './film-tile.component.html',
})
export class FilmTileComponent implements OnInit {

    
  @Input() filmInfo: Filme = {
    title: '',
    episode_id: '',
    director: '',
    opening_crawl: '',
    characters: []
  };

  constructor() { }

  ngOnInit(): void {
  }

}
