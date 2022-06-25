import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Filme } from 'src/app/models/films.model';
import { SettingsService } from 'src/app/services/settings.service';

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
    characters: [],
    url: ''
  };

  @Input() isCrawled = false;


  @Output() isSelectEpisodie = new EventEmitter<string>();

  selectedFilmCrawl(ep: string) {
    this.isSelectEpisodie.emit(ep);
  }

  constructor(
    private settingService: SettingsService,
  ) { }

  convertRoman(num: string) {
    return this.settingService.int2roman(num)
  }


  ngOnInit(): void {
  }

}
