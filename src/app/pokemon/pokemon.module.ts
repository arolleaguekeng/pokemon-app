import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from './components/list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './components/detail-pokemon/detail-pokemon.component';
import { RouterModule, Routes } from '@angular/router';
import { BorderCardDirective } from './directives/border-card.directive';
import { PokemonTypeColorPipe } from './pipes/pokemon-type-color.pipe';
import { PokemonService } from './pokemon.service';

// Define routes for pokemon module.
const pokemonRoutes: Routes = [
  { path:'pokemons', component: ListPokemonComponent},
  { path:'pokemon/:id', component: DetailPokemonComponent},
];

@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(pokemonRoutes)
  ],
  // To inject Services in the module.
  providers: [
    PokemonService
  ]
})
export class PokemonModule { }
