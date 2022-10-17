import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { POKEMONS } from 'src/app/pokemon/data/mock-pokemon-list';
import { Pokemon } from 'src/app/pokemon/models/pokemon';
import { PokemonService } from '../../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styles: [
  ]
})
export class ListPokemonComponent implements OnInit {
  pokemonList: Pokemon[];
  constructor(private router: Router,
    private pokemonService: PokemonService){}

  goToPokemonDetails(pokemon: Pokemon){
    this.router.navigate([`/pokemon/${pokemon.id}`])
  }

  ngOnInit(): void {
    this.pokemonList = this.pokemonService.getPokemonList();
  }
}
