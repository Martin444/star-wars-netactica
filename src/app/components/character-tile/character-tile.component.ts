import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Filme } from 'src/app/models/films.model';
import { People } from 'src/app/models/people.model';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-character-tile',
  templateUrl: './character-tile.component.html',
})


export class CharacterTileComponent implements OnInit {

  @Input() characterize: People | undefined;
  @Output() isOpenModal = new EventEmitter<boolean>(false);
  @Output() peopleSelected = new EventEmitter<People>();




  constructor() {
    
   }

  ngOnInit(): void {
  }

  openFilmsOfCharacter(character: People) {
    this.isOpenModal.emit(true);
    this.peopleSelected.emit(character);
  }


}
