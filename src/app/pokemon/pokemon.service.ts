import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { POKEMONS } from './data/mock-pokemon-list';
import { Pokemon } from './models/pokemon';

@Injectable()
export class PokemonService {

  constructor(private http: HttpClient){

  }
  // HTTP get for take data from API
  getPokemonList(): Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>('api/pokemons').pipe(
      tap((pokemonList) => this.log(pokemonList)),
      catchError((error) => this.handleError(error,[]))
    );
  }

  // HTTP get By Id
  getPokemonById(pokemonId: number): Observable<Pokemon|undefined>{
    return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
      tap((pokemon) => this.log(pokemon)), 
      catchError((error) => this.handleError(error,undefined))
    );
  }

  // Adaptative HTTP Update Pockemon
  updatePokemon(pokemon: Pokemon): Observable<null> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.put('api/pokemons', pokemon, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    )
  }

  

 // Correct HTTP Update Pockemon

 //updatePokemon(pokemon: Pokemon): Observable<Pokemon|undefined> {
 //  const httpOptions = {
 //    headers: new HttpHeaders({'Content-Type': 'application/json'})
 //  };

 //  return this.http.put('api/pokemon', pokemon, httpOptions).pipe(
 //    tap((response) => this.log(response)),
 //    catchError((error) => this.handleError(error, undefined))
 //  )
 //}


 deletePokemonById(pokemonId: number): Observable<null> {
  return this.http.delete(`api/pokemons/${pokemonId}`).pipe(
    tap((response) => this.log(response)),
    catchError((error) => this.handleError(error, null))
  )
 }

 private log(response: any){
   console.table(response);
 }

  private handleError(error: Error, errorValue: any){
    console.error(error);
    return of(errorValue);
  }

  getPokemonTypeList(): string[]{
    return [
      'Plante',
      'Feu',
      'Eau',
      'Insecte',
      'Normal',
      'Electrik',
      'Poison',
      'Fée',
      'Vol',
      'Combat',
      'Psy'
    ];

  }
}
