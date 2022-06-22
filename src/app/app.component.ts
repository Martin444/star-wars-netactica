import { Component } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Filme } from './models/films.model';
import { FilmsService } from './services/films.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'star-wars';

  isLoadingFilms = true;

  allFIlmes: Filme[] = []

  constructor(
    private filmServices: FilmsService,
  ) {
   
  }

  getFilmesOfService(): Filme[] {
    try {
      this.filmServices.getAllFilms().subscribe((resp: any) => {
        this.isLoadingFilms = false;
        resp['results'].map((e: any)=>{
          this.allFIlmes.push(e)
        })
      })
      return this.allFIlmes;
    } catch (error: any) {
      throw catchError(error.Observable)
    }

  }

  ngOnInit(): void {
    this.getFilmesOfService();
  }
  

}
