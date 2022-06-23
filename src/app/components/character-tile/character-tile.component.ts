import { Component, Input, OnInit } from '@angular/core';
import { Filme } from 'src/app/models/films.model';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-character-tile',
  templateUrl: './character-tile.component.html',
})


export class CharacterTileComponent implements OnInit {


  
  constructor() {
    
   }

  ngOnInit(): void {
  }

}
