import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Filme } from 'src/app/models/films.model';
import { People } from 'src/app/models/people.model';
import { CastService } from 'src/app/services/cast.service';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
})

export class CastComponent implements OnInit {

  filmSelect: Filme = {
    title: '',
    episode_id: '',
    director: '',
    opening_crawl: '',
    characters: [],
    url: ''
  };

  listCast: People[] = [];
  isLoadPeople = true;

  constructor(
    private castService: CastService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.getCastOfEpisode();
    this.searchCast();
  }

  async getCastOfEpisode() {
   this.route.paramMap.subscribe(async (episode) => {
      this.listCast = await this.castService.getCastOfEpisode(episode.get('id')!)
      this.isLoadPeople = false;
   });
  }

  async searchCast() {
    let resp = await this.castService.searchCharacter('blue');
    console.log(resp)
  }

  
}
