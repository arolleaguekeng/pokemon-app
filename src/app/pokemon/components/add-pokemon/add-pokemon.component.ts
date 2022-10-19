import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon';

@Component({
  selector: 'app-add-pokemon',
  template: `
    <h2 class="center">Add Pokemon</h2>
    <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
  `
})
export class AddPokemonComponent implements OnInit {

  pokemon: Pokemon;

  ngOnInit() {
    console.log('succes');
    this.pokemon = new Pokemon();
  }

}
