import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';

@Component({
  selector: 'detail-pokemon',
  templateUrl: './app/pokemons/detail-pokemon.component.html'
})

export class DetailPokemonComponent implements OnInit {
  // 1. La propriété pokemons est un tableau d'objet de type Pokemon
  pokemons: Pokemon[] = null;
  // 2. pokémon à afficher dans le template
  pokemon: Pokemon = null;

  constructor(private route: ActivatedRoute, private router: Router) { }
  // on injecte 'route' pour récuprérer les paramètres de l'url,
  // et 'router' pour rediriger l'utilisateur
  ngOnInit(): void {
    // on initialise la liste des pokémons
    this.pokemons = POKEMONS;
    // on récupère le paramètre 'id' contenu dans l'url
    let id = +this.route.snapshot.paramMap.get('id');
    // on itère sur le tableau de pokémons pour trouver
    // le pokémon ayant le bon id
    for (let i = 0; i < this.pokemons.length; i++) {
      // si on trouve un pokémon avec le bon id,
      // on affecte ce pokémon à la propriété du composant
      if (this.pokemons[i].id == id) {
        this.pokemon = this.pokemons[i];
      }
    }
  }

  // Méthode permettant de rediriger l'utilisateur vers la page principale
  goBack(): void {
    this.router.navigate(['/pokemons']);
  }
}