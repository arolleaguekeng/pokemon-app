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

  selectPokemon(pokemonId: string){
    const index: number = +(pokemonId);
    const pokemon = this.pokemonList.find(
      pokemon => 
      pokemon.id == +pokemonId   
    );
    // If pokemon exist, show it. else show Error Message
    pokemon ? this.pokemonSelected = pokemon
    :
    this.pokemonSelected = pokemon;
    console.log(`You have cliked on ${this.pokemonList[index].name} Pokemon` )
  } 
}
