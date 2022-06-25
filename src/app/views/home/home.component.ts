import { Component, Input, OnInit } from '@angular/core';
import { catchError } from 'rxjs';
import { Filme } from 'src/app/models/films.model';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  allFilmes: Filme[] = []
  isLoadingFilms = true;



  thisCrawl = '0';


  changeCrawl(epid: string) {
    if(epid === this.thisCrawl) {
      this.thisCrawl = '0'
    } else {
      this.thisCrawl = epid;
    }
  }


  constructor(
    private filmServices: FilmsService
  ) { }

  getFilmesOfService(): Filme[] {
    try {
      this.filmServices.getAllFilms().subscribe((resp: any) => {
        this.isLoadingFilms = false;
        let respon = resp['results'].sort((e: any, t: any) => 0 - (e.episode_id > t.episode_id ? -1 : 1))
        respon.map((e: any)=>{
          this.allFilmes.push(e)
        })
      })
      return this.allFilmes;
    } catch (error: any) {
      throw catchError(error.Observable)
    }

  }


  ngOnInit(): void {
    this.getFilmesOfService();

  }

}
