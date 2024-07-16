import { PokemonsList } from './../../../../../../models/pokemon.models';
import { Component, inject, OnInit } from '@angular/core';
import { PokemonService } from '@/services/pokemon/pokemon.service';
import { PokemonListComponent } from '@/components/pokemon/pokemon-list/pokemon-list.component';
import {
  BehaviorSubject,
  combineLatest,
  debounceTime,
  map,
  shareReplay,
} from 'rxjs';
import { AsyncPipe, NgIf, NgSwitch } from '@angular/common';
import { ButtonComponent } from '@/components/button/button.component';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pokemon-list-page',
  standalone: true,
  imports: [
    PokemonListComponent,
    AsyncPipe,
    NgSwitch,
    NgIf,
    ButtonComponent,
    RouterOutlet,
    FormsModule,
  ],
  templateUrl: './pokemon-list-page.component.html',
  styleUrl: './pokemon-list-page.component.scss',
})
export class PokemonListPageComponent implements OnInit {
  private pokemonService = inject(PokemonService);

  private pokemons$ = new BehaviorSubject<PokemonsList | null>(null);

  loading$ = new BehaviorSubject<boolean>(false);

  searchTerm = '';

  private searchTerm$ = new BehaviorSubject('');

  private page: number = 1;

  private pageSize = 20;

  private debouncedSearchTerm$ = this.searchTerm$.pipe(
    debounceTime(300),
    shareReplay()
  );

  filteredPokemons$ = combineLatest([
    this.pokemons$,
    this.debouncedSearchTerm$,
  ]).pipe(
    map(([pokemons, searchTerm]) => {
      const filtered = pokemons?.filter((pokemon) =>
        pokemon.name.includes(searchTerm)
      );
      return filtered || [];
    })
  );

  ngOnInit() {
    this.loadMore();
  }

  async onSerachTermChanged() {
    this.searchTerm$.next(this.searchTerm);
  }

  async loadMore() {
    this.loading$.next(true);

    const response = await this.pokemonService.list(this.page, this.pageSize);

    if (response) {
      this.page = this.page + 1;
      const newPagePokemons = response.results;
      const currentPokemons = this.pokemons$.value || [];
      const allLoadedPokemons = [...currentPokemons, ...newPagePokemons];
      this.pokemons$.next(allLoadedPokemons);
    }

    this.loading$.next(false);
  }
}
