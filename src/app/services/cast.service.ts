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

  async getEpisodieData(ep: string) {
    let respon = await new Promise<Filme>((resolve, reject) => {
      this.filmService.getOneFilm(ep).subscribe((info: any) => {
        resolve(info)
      });
    })
    return respon;
  }
  async getEpisodieDatabyName(ep: string) {
    let respon = await new Promise<Filme>((resolve, reject) => {
      this.filmService.getFilmbyName(ep).subscribe((info: any) => {
        resolve(info['results'][0])
      });
    })
    return respon;
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
  
  async getCastbyName(ep:string): Promise<People[]> {
    let respon = await new Promise<People[]>((resolve, reject)=>{
      this.filmService.getFilmbyName(ep).subscribe((info: any) => {
        let listPeople: People[] = [];
        info['results'][0]['characters'].forEach(async (element: any) => {
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
