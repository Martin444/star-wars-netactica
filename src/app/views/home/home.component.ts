import { Component, Input, OnInit } from '@angular/core';
import { Filme } from 'src/app/models/films.model';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  @Input() allFilmes: Filme[] = []

  thisCrawl = '0';

  changeCrawl(epid: string) {
    if(epid === this.thisCrawl) {
      console.log(epid)
      this.thisCrawl = '0'
    } else {
      this.thisCrawl = epid;
    }
  }


  constructor() { }



  ngOnInit(): void {
  }

}
