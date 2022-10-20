import { Component, Input, OnInit, ɵɵtrustConstantResourceUrl } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../../models/pokemon';
import { PokemonService } from '../../pokemon.service';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: 'pokemon-form.component.html',
  styleUrls: [
    'pokemon-form.component.css'
  ]
})
export class PokemonFormComponent implements OnInit {
  @Input() pokemon: Pokemon;
  types: string[];
  isAddForm: boolean;
  constructor(private pokemonService: PokemonService,
    private router: Router) { }

  ngOnInit()  {
    this.types = this.pokemonService.getPokemonTypeList();
    console.log("Ouverture reuissie")
    this.isAddForm = this.router.url.includes('add');
    
  }

  hasType(type: string): boolean{
    return this.pokemon.types.includes(type);
  }

  selectType($event: Event, type: string){
    const isChecked: boolean = ($event.target as HTMLInputElement).checked;
    // If user click on checkox, we add a type to the pokemon
    if(isChecked) {
      this.pokemon.types.push(type)
    }
    else {
      const index = this.pokemon.types.indexOf(type);
      this.pokemon.types.splice(index, 1);
    }
  }

  isTypesValid(type: string): boolean{

    // If just one type is selected and user try to deselect him.
    if(this.pokemon.types.length == 1 && this.hasType(type)){
      return false;
    }

    // If user try to select four types.
    if(this.pokemon.types.length > 2 && !this.hasType(type)){
      return false;
    }


    return true;
  }

  onSubmit(){
    if(this.isAddForm){
      this.pokemonService.addPokemon(this.pokemon)
      .subscribe((pokemon: Pokemon) => this.router.navigate(['/pokemon', pokemon.id]))
    }
    else{
      this.pokemonService.updatePokemon(this.pokemon)
          .subscribe(() => this.router.navigate(['/pokemon', this.pokemon.id]));
    }
    
  }

} 
