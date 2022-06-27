import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Filme } from '../models/films.model';
import { People } from '../models/people.model';
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

  
  async getCastOfEpisode(ep:string): Promise<People[]> {
    let respon = await new Promise<People[]>((resolve, reject)=>{
      this.filmService.getOneFilm(ep).subscribe((info: any) => {
        let listPeople: People[] = [];
        info['characters'].forEach(async (element: any) => {
          let respon = await this.getOneCharacter(element)
          listPeople.push(respon)
        });
        resolve(listPeople)
      });
    })
    return respon;
  }

  getOneCharacter(url: string) {
    return new Promise<any>((res, rej) => {
      this.http.get(url).subscribe(response => {
        res(response)
      })
    })
  }

  searchCharacter(term: string) {
    return new Promise<any>((res, rej) => {
      this.http.get(`${this.url}/?search=${term}`).subscribe(result => {
        res(result)
      })
    })
  }
 

}
