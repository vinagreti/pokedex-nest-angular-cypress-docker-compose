import { BaseService } from "../service/base-service";
import { PokemonService } from "./pokemon.service";
import { Pokemon, PokemonsList } from "../../../models/pokemon.models";

describe("PokemonService", () => {
  let pokemonService: PokemonService;
  const baseserviceMock: BaseService = {
    get: async <T = unknown>(url: string) => {
      return {} as T;
    },
  } as BaseService;

  beforeEach(async () => {
    pokemonService = new PokemonService(baseserviceMock);
  });

  describe("list", () => {
    it("should GET the list of pokemons", async () => {
      // given
      const expected: PokemonsList = [{ name: "test-name", url: "test-url" }];
      jest
        .spyOn(baseserviceMock, "get")
        .mockImplementation(async () => expected);
      // when
      const result = await pokemonService.list();
      // then
      expect(result).toBe(expected);
    });

    it("should GET a pokemon by id", async () => {
      // given
      const expected = {} as Pokemon;
      jest
        .spyOn(baseserviceMock, "get")
        .mockImplementation(async () => expected);
      // when
      const result = await pokemonService.get("/foo");
      // then
      expect(result).toBe(expected);
    });
  });
});
