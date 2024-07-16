import { PokemonDetailsComponent } from '@/components/pokemon/pokemon-details/pokemon-details.component';
import { Component, inject, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pokemon } from '../../../../../../models/pokemon.models';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PokemonService } from '@/services/pokemon/pokemon.service';
import { AsyncPipe, NgIf } from '@angular/common';
import { IconComponent } from '@/components/icon/icon.component';
import { ButtonComponent } from '@/components/button/button.component';

@Component({
  selector: 'app-pokemon-details-page',
  standalone: true,
  imports: [
    PokemonDetailsComponent,
    RouterModule,
    NgIf,
    AsyncPipe,
    IconComponent,
    ButtonComponent,
  ],
  templateUrl: './pokemon-details-page.component.html',
  styleUrl: './pokemon-details-page.component.scss',
})
export class PokemonDetailsPageComponent implements OnInit {
  private pokemonService = inject(PokemonService);

  private route = inject(ActivatedRoute);

  pokemon$ = new BehaviorSubject<Pokemon | null>(null);

  ngOnInit() {
    this.load();
  }

  async load() {
    const id = this.route.snapshot.params['id']!;
    const pokemon = await this.pokemonService.get(id);
    this.pokemon$.next(pokemon);
  }
}
