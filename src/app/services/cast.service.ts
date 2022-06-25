import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FilmsService } from './films.service';

@Injectable({
  providedIn: 'root'
})
export class CastService {
  url: string = 'https://swapi.dev/api/people';

  constructor(
    private http: HttpClient,
    private filmService: FilmsService
  ) { }

  getAllCast() {
    return this.http.get(this.url)
  }

  getCastOfEpisode(ep:string) {
    return this.filmService.getOneFilm(ep);
  }
}
