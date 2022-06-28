import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Filme } from 'src/app/models/films.model';
import { People } from 'src/app/models/people.model';
import { CastService } from 'src/app/services/cast.service';
import { FilmsService } from 'src/app/services/films.service';

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
  filterCast: People[] = [];
  isLoadPeople = true;
  fristCharacters = 10;



  filterForm!:FormGroup;
  resultsFilterTitle: string = 'Results';

  filterEye = 'All';
  filterGener = 'All';
  filterFilm = this.filmSelect.title;


  // iS OPEN MODAL
  isOpenModal = false;
  peopleSelected!: People;
  filmsOfCharacterSelected!: Filme[];

  openModal(value: boolean) {
    this.isOpenModal = value;
  }

  selectPeople(people: People) {
    this.peopleSelected = people;
    this.getFilmsOfCharacter();
  }

  async getFilmsOfCharacter() {
    let filmsResponse = new Promise<Filme[]>((resolve, reject) => {
      let tempFilms:Filme[] = []
      this.peopleSelected.films.forEach( async (film) => {
          let films = await this.filmService.getOneFilmeURL(film);
          tempFilms.push(films);
        });
        resolve(tempFilms);
    });
    this.filmsOfCharacterSelected = await filmsResponse;
  }


  constructor(
    private castService: CastService,
    private filmService: FilmsService,
    private route: ActivatedRoute,
  ) {


  }

  ngOnInit(): void {
    this.getCastOfEpisode();
  }
  
  async getCastOfEpisode() {
    this.route.paramMap.subscribe(async (episode) => {
      this.filmSelect = await this.castService.getEpisodieData(episode.get('id')!);
      this.listCast = await this.castService.getCastOfEpisode(episode.get('id')!)
      this.isLoadPeople = false;
      this.filterFilm = this.filmSelect.title;
    });
  }
  
  async getCastByNameEp(name: string) {
      this.filmSelect = await this.castService.getEpisodieDatabyName(name);
      console.log(this.filmSelect)
      this.listCast = await this.castService.getCastbyName(name)
      this.isLoadPeople = false;
      this.filterFilm = this.filmSelect.title;
  }

  getFilterValues() {
    if(this.filterFilm === this.filmSelect.title) {
        let respon = this.listCast.filter((people) => {
          if (this.filterEye === 'All' && this.filterGener === 'All') {
            return people;
          } else if (this.filterEye === 'All' && this.filterGener !== 'All') {
            return people.gender === this.filterGener;
          } else if (this.filterEye !== 'All' && this.filterGener === 'All') {
            return people.eye_color === this.filterEye
          } else {
            if(people.eye_color.includes(this.filterEye) && people.gender.includes(this.filterGener)) {
              return people.eye_color.includes(this.filterEye) && people.gender.includes(this.filterGener)
            } else {
              this.resultsFilterTitle = 'Characters not found, Sorry. try again!'
              return people;
            }
          }
        });
        this.filterCast = respon;
    } else {
      this.isLoadPeople = true;
      this.getCastByNameEp(this.filterFilm);
    }
  }


  seeMore() {
    let resume = this.listCast.length - this.fristCharacters;
    if (resume > 10) {
      this.fristCharacters += 10;
    } else {
      this.fristCharacters += resume;
    }
  }
}
