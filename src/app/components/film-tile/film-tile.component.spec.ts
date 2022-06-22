import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmTileComponent } from './film-tile.component';

describe('FilmTileComponent', () => {
  let component: FilmTileComponent;
  let fixture: ComponentFixture<FilmTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
