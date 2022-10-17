import { Component } from '@angular/core';
import { POKEMONS } from 'src/app/data/mock-pokemon-list';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styles: [
  ]
})
export class ListPokemonComponent  {
  pokemonList: Pokemon[] = POKEMONS;
}
