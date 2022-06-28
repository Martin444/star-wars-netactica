import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
 
@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  url: string = 'https://swapi.dev/api/films';

  constructor(
    private http: HttpClient
  ) { }

  getAllFilms() {
    return this.http.get(this.url)
  }

  getOneFilm(ep: string) {
    return this.http.get(`${this.url}/${ep}`)
  }

  getFilmbyName(ep: string) {
    return this.http.get(`${this.url}/?search=${ep}`)
  }

  getOneFilmeURL(url: string) {
    return new Promise<any>((res, rej) => {
      this.http.get(url).subscribe(response => {
        res(response)
      })
    })
  }
}
