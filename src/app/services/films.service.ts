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
}
