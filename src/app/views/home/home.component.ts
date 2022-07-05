import { Component, Input, OnInit } from '@angular/core';
import { catchError } from 'rxjs';
import { Filme } from 'src/app/models/films.model';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  isLoadingFilms = true;
  allFilmes: Filme[] = []

  thisCrawlAnimated = '0';

  constructor(
    private filmServices: FilmsService
  ) { }


  ngOnInit(): void {
    this.getAllFilmes();
  }

  async getAllFilmes(): Promise<Filme[]> {
    try {
      let respFilms = await this.filmServices.getAllFilms();
      let filmsOrder = respFilms.sort((e: any, t: any) => 0 - (e.episode_id > t.episode_id ? -1 : 1))
        filmsOrder.map((e: any)=>{
          this.allFilmes.push(e)
        })
      this.isLoadingFilms = false;
      return this.allFilmes;
    } catch (error: any) {
      throw catchError(error.Observable)
    }
  }

  changeCrawl(epid: string) {
    if(epid === this.thisCrawlAnimated) {
      this.thisCrawlAnimated = '0'
    } else {
      this.thisCrawlAnimated = epid;
    }
  }
}
