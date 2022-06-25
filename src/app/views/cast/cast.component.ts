import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CastService } from 'src/app/services/cast.service';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
})

export class CastComponent implements OnInit {

  constructor(
    private castService: CastService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.getCastOfEpisode()

  }


  getCastOfEpisode() {
   this.route.paramMap.subscribe(episode => {
      this.castService.getCastOfEpisode(episode.get('id')!).subscribe( (info: any) =>{
        console.log(info['title'])
      })
   });

  }
}
