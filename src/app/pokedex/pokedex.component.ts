import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, RouterLink} from "@angular/router";


@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.scss'
})
export class PokedexComponent implements OnInit{
  pokemons :any[] = [];
  limit : number = 20;
  offset : number = 0;
  selectedPokemon: any;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.loadPokemons();
  }

 async loadPokemons(): Promise<void> {
    try {
      const data = await this.pokemonService.getPokemons(this.limit, this.offset);
      this.pokemons = this.pokemons.concat(data.results);
    } catch (error) {
      console.error('Error fetching pokemons:', error);
    }
  }

  async loadPokemonDetails(name: string): Promise<void> {
    try {
      const data = await this.pokemonService.getPokemonDetails(name);
      this.selectedPokemon = data;
    } catch (error) {
      console.error('Error fetching pokemon details:', error);
    }
  }

  loadMore(): void {
    this.offset += this.limit;
    this.loadPokemons();
  }
}
