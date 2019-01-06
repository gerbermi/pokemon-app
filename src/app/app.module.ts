import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
// importez la directive
import { BorderCardDirective } from './border-card.directive';
// importez pipe PokemonTypeColorPipe
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';


@NgModule({
  imports: [BrowserModule],
  // déclarez BoderCarDirective dans le module racine de l'application
  declarations: [AppComponent, BorderCardDirective, PokemonTypeColorPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
