import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { POKEMONS } from 'src/app/data/mock-pokemon-list';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styles: [
  ]
})
export class DetailPokemonComponent implements OnInit {
  pokemonList: Pokemon[];
  pokemon: Pokemon|undefined;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.pokemonList = POKEMONS;
    // To access the current route and retrieve the id
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
    pokemonId ? this.pokemon = this.pokemonList.find(pokemon => pokemon.id == +pokemonId)
    : this.pokemon = undefined;
  }

  // Manage route to return in page "PokemonList"
  goToPokemonList(){
    this.router.navigate(['/pokemons']);
  }

}
