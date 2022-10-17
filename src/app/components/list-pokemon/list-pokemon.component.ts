import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private router: Router){}

  goToPokemonDetails(pokemon: Pokemon){
    this.router.navigate([`/pokemon/${pokemon.id}`])

  }
}
