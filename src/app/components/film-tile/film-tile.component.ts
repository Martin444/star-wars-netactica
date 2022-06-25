import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Filme } from 'src/app/models/films.model';

@Component({
  selector: 'app-film-tile',
  templateUrl: './film-tile.component.html',
})
export class FilmTileComponent implements OnInit {

    
  @Input() filmInfo: Filme = {
    title: '',
    episode_id: '',
    director: '',
    opening_crawl: '',
    characters: []
  };

  @Input() isCrawled = false;


  @Output() isSelectEpisodie = new EventEmitter<string>();

  selectedFilmCrawl(ep: string) {
    this.isSelectEpisodie.emit(ep);
  }

   int2roman = (ep: string): string => {

    let original = Number(ep);

    if (original < 1 || original > 3999) {
      throw new Error('Error: Input integer limited to 1 through 3,999');
    }
  
    const numerals = [
      ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'], // 1-9
      ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'], // 10-90
      ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'], // 100-900
      ['M', 'MM', 'MMM'], // 1000-3000
    ];
  
    // TODO: Could expand to support fractions, simply rounding for now
    const digits = Math.round(original).toString().split('');
    let position = (digits.length - 1);
  
    return digits.reduce((roman, digit) => {
      if (digit !== '0') {
        roman += numerals[position][parseInt(digit) - 1];
      }
  
      position -= 1;
  
      return roman;
    }, '');
  }

  constructor() { }

  ngOnChanges(): void {

  }

  ngOnInit(): void {
  }

}
