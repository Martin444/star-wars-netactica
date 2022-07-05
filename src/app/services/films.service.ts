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
    return new Promise<any>((res, rej) => {
      try {
        this.http.get(this.url).subscribe((response: any) => {
          res(response['results'])
        });
      } catch (error: any) {
         rej(error)
      }
    })
  }

  getOneFilm(ep: string) {
    try {
      return this.http.get(`${this.url}/${ep}`)
    } catch (error: any) {
      throw new Error(error);
    }
  }

  getFilmbyName(ep: string) {
    try {
      return this.http.get(`${this.url}/?search=${ep}`)
    } catch (error: any) {
      throw new Error(error);
    }
  }

  getOneFilmeURL(url: string) {
    return new Promise<any>((res, rej) => {
      this.http.get(url).subscribe(response => {
        res(response)
      })
    })
  }
}
