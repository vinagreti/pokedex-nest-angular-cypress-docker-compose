import { inject, Injectable } from '@angular/core';
import { BaseService } from '@/services/base/base.service';
import {
  Pokemon,
  PokemonListResponse,
} from '../../../../../models/pokemon.models';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private baseService = inject(BaseService);

  async list(page: number = 1, limit: number = 6) {
    const offset = page * limit - limit;
    return await this.baseService.get<PokemonListResponse>(
      `/pokemon?offset=${offset}&limit=${limit}`
    );
  }

  async get(idOrName: number | string) {
    return await this.baseService.get<Pokemon>(`/pokemon/${idOrName}`);
  }
}
