import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPokemonComponent } from './components/detail-pokemon/detail-pokemon.component';
import { ListPokemonComponent } from './components/list-pokemon/list-pokemon.component';

// Define routes for project.
const routes: Routes = [
  { path:'pokemons', component: ListPokemonComponent},
  { path:'pokemon/:id', component: DetailPokemonComponent},
  { path: '', redirectTo:'pokemons', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
