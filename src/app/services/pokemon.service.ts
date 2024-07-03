import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor() {}

  async getPokemons(limit: number = 20, offset: number = 0): Promise<any> {
    const response = await fetch(`${this.apiUrl}?limit=${limit}&offset=${offset}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  }

  async getPokemonDetails(name: string): Promise<any> {
    const response = await fetch(`${this.apiUrl}/${name}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  }
}
