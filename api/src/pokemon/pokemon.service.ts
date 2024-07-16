import { Pokemon, PokemonsList } from "./../../../models/pokemon.models";
import { Injectable } from "@nestjs/common";
import { BaseService } from "../service/base-service";

@Injectable()
export class PokemonService {
  constructor(private baseService: BaseService) {}

  list(limit?: number, offset?: number) {
    return this.baseService.get<PokemonsList>("/pokemon", {
      searchParams: { limit, offset },
    });
  }

  get(id: string | number) {
    return this.baseService.get<Pokemon>(`/pokemon/${id}`);
  }
}
