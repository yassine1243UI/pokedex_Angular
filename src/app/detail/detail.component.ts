import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {UpperCasePipe} from "@angular/common";
import {PokemonService} from "../services/pokemon.service";

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    UpperCasePipe
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnInit {
  pokemon!: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getSinglePokemon();
  }

  private async getSinglePokemon() {
    const pokemonName = this.route.snapshot.params['name'];
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    this.pokemon = await response.json();
  }
  
}
