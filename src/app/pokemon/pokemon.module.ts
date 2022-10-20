import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from './components/list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './components/detail-pokemon/detail-pokemon.component';
import { RouterModule, Routes } from '@angular/router';
import { BorderCardDirective } from './directives/border-card.directive';
import { PokemonTypeColorPipe } from './pipes/pokemon-type-color.pipe';
import { PokemonService } from './pokemon.service';
import { FormsModule } from '@angular/forms';
import { PokemonFormComponent } from './components/pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from './components/edit-pokemon/edit-pokemon.component';
import { AddPokemonComponent } from './components/add-pokemon/add-pokemon.component';
import { SearchPokemonComponent } from './components/search-pokemon/search-pokemon.component';
import { LoaderComponent } from './loader/loader.component';
import { AuthGuard } from '../auth.guard';

// Define routes for pokemon module.
const pokemonRoutes: Routes = [
  
  { path:'edit/pokemon/:id', component: EditPokemonComponent, canActivate: [AuthGuard]},
  { path:'pokemon/add', component: AddPokemonComponent, canActivate: [AuthGuard]},
  { path:'pokemons', component: ListPokemonComponent, canActivate: [AuthGuard]},
  { path:'pokemon/:id', component: DetailPokemonComponent, canActivate: [AuthGuard]},
  
  
];

@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    PokemonFormComponent,
    EditPokemonComponent,
    AddPokemonComponent,
    SearchPokemonComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(pokemonRoutes)
  ],
  // To inject Services in the module.
  providers: [
    PokemonService
  ]
})
export class PokemonModule { }
