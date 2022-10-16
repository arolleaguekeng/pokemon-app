import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './data/mock-pokemon-list';
import { Pokemon } from './models/pokemon';

@Component({
  selector: 'app-root',
  templateUrl:'templates/app.component.html'   
})
export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon|undefined;
  
  ngOnInit(){
      console.table(this.pokemonList);
  }

  selectPokemon(pokemon: Pokemon){
    console.log(`You have cliked on ${pokemon.name} Pokemon` )
  } 
}
