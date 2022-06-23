import { Component, Input, OnInit } from '@angular/core';
import { Filme } from 'src/app/models/films.model';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  @Input() allFilmes: Filme[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
