import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { FilmTileComponent } from './components/film-tile/film-tile.component';
import { CharacterTileComponent } from './components/character-tile/character-tile.component';
import { CastComponent } from './views/cast/cast.component';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilmTileComponent,
    CharacterTileComponent,
    CastComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    
    FormsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
