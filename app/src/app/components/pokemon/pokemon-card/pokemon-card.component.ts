import { PokemonService } from '@/services/pokemon/pokemon.service';
import { AfterViewInit, Component, inject, Input } from '@angular/core';
import {
  Pokemon,
  PokemonsListItem,
} from '../../../../../../models/pokemon.models';
import { RouterLink } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [RouterLink, NgIf, AsyncPipe],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.scss',
})
export class PokemonCardComponent implements AfterViewInit {
  private pokemonService = inject(PokemonService);

  @Input({ required: true }) pokemonListItem!: PokemonsListItem;

  pokemon$ = new ReplaySubject<Pokemon>();

  async ngAfterViewInit() {
    const response = await this.pokemonService.get(this.pokemonListItem.name);
    if (response) {
      this.pokemon$.next(response);
    }
  }
}
