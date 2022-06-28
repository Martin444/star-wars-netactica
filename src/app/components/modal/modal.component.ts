import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Filme } from 'src/app/models/films.model';
import { People } from 'src/app/models/people.model';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})

export class ModalComponent implements OnInit {

  @Input() peopleSelected!: People;
  @Input() films: Filme[] = [];
  @Input() isOpen = false;
  @Output() isClosed = new EventEmitter<boolean>();


  closeModelFilms() {
    this.isClosed.emit(false);
  }


  thisCrawl = '0';


  changeCrawl(epid: string) {
    if(epid === this.thisCrawl) {
      this.thisCrawl = '0'
    } else {
      this.thisCrawl = epid;
    }
  }



  constructor(
    private filmService: FilmsService,
  ) { }

  ngOnInit(): void {
  }



}
