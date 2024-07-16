import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Query,
} from "@nestjs/common";
import { PokemonService } from "./pokemon.service";

@Controller("pokemon")
export class PokemonController {
  constructor(private pokemonService: PokemonService) {}

  @Get()
  list(@Query("limit") limit?: number, @Query("offset") offset?: number) {
    console.log("params", limit, offset);
    return this.pokemonService.list(limit, offset).then((res) => {
      if (res) {
        return res;
      } else {
        throw new HttpException("Not found", HttpStatus.NOT_FOUND);
      }
    });
  }

  @Get(":id")
  get(@Param() { id }: { id: string }) {
    return this.pokemonService.get(id).then((res) => {
      if (res) {
        return res;
      } else {
        throw new HttpException("Not found", HttpStatus.NOT_FOUND);
      }
    });
  }
}
