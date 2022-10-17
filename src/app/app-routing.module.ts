import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPokemonComponent } from './components/detail-pokemon/detail-pokemon.component';
import { ListPokemonComponent } from './components/list-pokemon/list-pokemon.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

// Define routes for project.
const routes: Routes = [
  { path:'pokemons', component: ListPokemonComponent},
  { path:'pokemon/:id', component: DetailPokemonComponent},
  { path: '', redirectTo:'pokemons', pathMatch:'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
