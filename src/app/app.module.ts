import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { PageNotFoundComponent } from './page-not-found.component';

// importez la directive
import { BorderCardDirective } from './border-card.directive';
// importez pipe PokemonTypeColorPipe
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { ListPokemonComponent } from './list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon.component';


@NgModule({
  imports: [BrowserModule, AppRoutingModule],
  // déclarez BoderCarDirective dans le module racine de l'application
  declarations: [AppComponent, BorderCardDirective, PokemonTypeColorPipe, ListPokemonComponent, DetailPokemonComponent,PageNotFoundComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
