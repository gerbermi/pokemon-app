import { Component } from '@angular/core';

@Component({
  selector: 'page-404',
  template: `
  <div class="center">
  <!-- <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png"/> -->
  <img src="./img/035.png"/>
  <h1>Hoops, cette page n'existe pas !</h1>
  <a routerLink="/pokemons" class="wafes-effect wawes-teal btn-flat">
  Retourner à l'accueil</a>
  </div>
  `
})
export class PageNotFoundComponent {}  
