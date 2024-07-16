import { Module } from "@nestjs/common";
import { PokemonController } from "./pokemon/pokemon.controller";
import { PokemonService } from "./pokemon/pokemon.service";
import { BaseService } from "./service/base-service";

@Module({
  imports: [],
  controllers: [PokemonController],
  providers: [PokemonService, BaseService],
})
export class PokedexApiModule {}
