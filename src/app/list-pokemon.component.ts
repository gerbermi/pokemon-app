import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';


@Component({
  selector: 'list-pokemon',
  templateUrl: './app/list-pokemon.component.html'
})
export class ListPokemonComponent implements OnInit {
  // 1. La propriété pokemons est un tableau d'objet de type Pokemon
  pokemons: Pokemon[] = null;

  constructor(private router: Router) { }

  ngOnInit() {
    this.pokemons = POKEMONS;

  }
  selectPokemon(pokemon: Pokemon): void {
    let link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }
}