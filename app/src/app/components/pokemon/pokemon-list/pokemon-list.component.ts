import { Component, Input } from '@angular/core';
import {
  PokemonsList,
  PokemonsListItem,
} from '../../../../../../models/pokemon.models';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [NgFor, RouterLink, PokemonCardComponent],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss',
})
export class PokemonListComponent {
  @Input({ required: true }) pokemons!: PokemonsList;

  trackByFn(_index: number, pokemon: PokemonsListItem) {
    return pokemon.name;
  }
}
