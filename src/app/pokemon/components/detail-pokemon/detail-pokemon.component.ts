import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from 'src/app/pokemon/models/pokemon';
import { PokemonService } from '../../pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styles: [
  ]
})
export class DetailPokemonComponent implements OnInit {
  pokemonList: Pokemon[];
  pokemon: Pokemon|undefined;
  constructor(private route: ActivatedRoute,
     private router: Router,
     private pokemonService: PokemonService) { }

  ngOnInit() {
    // To access the current route and retrieve the id
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
    pokemonId ? this.pokemon = this.pokemonService.getPokemonById(+pokemonId)
    : this.pokemon = undefined;
  }

  // Manage route to return in page "PokemonList"
  goToPokemonList(){
    this.router.navigate(['/pokemons']);
  }

  goToEditPokemon(pokemon: Pokemon){
    this.router.navigate(['/edit/pokemon', pokemon.id])
  }
  

}
