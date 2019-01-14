"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var mock_pokemons_1 = require("./mock-pokemons");
var DetailPokemonComponent = /** @class */ (function () {
    function DetailPokemonComponent(route, router) {
        this.route = route;
        this.router = router;
        // 1. La propriété pokemons est un tableau d'objet de type Pokemon
        this.pokemons = null;
        // 2. pokémon à afficher dans le template
        this.pokemon = null;
    }
    // on injecte 'route' pour récuprérer les paramètres de l'url,
    // et 'router' pour rediriger l'utilisateur
    DetailPokemonComponent.prototype.ngOnInit = function () {
        // on initialise la liste des pokémons
        this.pokemons = mock_pokemons_1.POKEMONS;
        // on récupère le paramètre 'id' contenu dans l'url
        var id = +this.route.snapshot.paramMap.get('id');
        // on itère sur le tableau de pokémons pour trouver
        // le pokémon ayant le bon id
        for (var i = 0; i < this.pokemons.length; i++) {
            // si on trouve un pokémon avec le bon id,
            // on affecte ce pokémon à la propriété du composant
            if (this.pokemons[i].id == id) {
                this.pokemon = this.pokemons[i];
            }
        }
    };
    // Méthode permettant de rediriger l'utilisateur vers la page principale
    DetailPokemonComponent.prototype.goBack = function () {
        this.router.navigate(['/pokemons']);
    };
    DetailPokemonComponent = __decorate([
        core_1.Component({
            selector: 'detail-pokemon',
            templateUrl: './app/detail-pokemon.component.html'
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router])
    ], DetailPokemonComponent);
    return DetailPokemonComponent;
}());
exports.DetailPokemonComponent = DetailPokemonComponent;
//# sourceMappingURL=detail-pokemon.component.js.map