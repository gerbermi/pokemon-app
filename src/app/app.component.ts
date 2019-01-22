import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemons/pokemon';
import { POKEMONS } from './pokemons/mock-pokemons';


@Component({
	selector: 'pokemon-app',
	templateUrl: './app/app.component.html'
})
export class AppComponent implements OnInit {
	// 1. La propriété pokemons est un tableau d'objet de type Pokemon
	pokemons: Pokemon[] = null;
	ngOnInit() {
		this.pokemons = POKEMONS;
		
	}
	selectPokemon(pokemon: Pokemon) {
		console.log('Vous avez sélectionné ' + pokemon.name);
	}	

}