import { PokemonDetailsPageComponent } from '@/pages/pokemon/pokemon-details-page/pokemon-details-page.component';
import { PokemonListPageComponent } from '@/pages/pokemon/pokemon-list-page/pokemon-list-page.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: PokemonListPageComponent,
    children: [{ path: ':id', component: PokemonDetailsPageComponent }],
  },
];
