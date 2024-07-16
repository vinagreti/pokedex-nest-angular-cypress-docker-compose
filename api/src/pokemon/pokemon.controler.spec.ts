import * as request from "supertest";
import { Test } from "@nestjs/testing";
import { PokemonService } from "./pokemon.service";
import { INestApplication } from "@nestjs/common";
import { PokedexApiModule } from "../pokedex-api.module";
import { Pokemon, PokemonsList } from "../../../models/pokemon.models";

describe("PokemonControllerE2e", () => {
  const foo = "foo";
  let app: INestApplication;
  let pokemonServiceMock: PokemonService = {
    list: async () => [],
    get: async (id: string) => ({}),
  } as unknown as PokemonService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [PokedexApiModule],
    })
      .overrideProvider(PokemonService)
      .useValue(pokemonServiceMock)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`should /GET pokemons return success`, async () => {
    // given
    const expected: PokemonsList = [{ name: foo, url: foo }];
    const server = app.getHttpServer();
    jest
      .spyOn(pokemonServiceMock, "list")
      .mockImplementation(async () => expected);
    // when
    const response = request(server).get("/pokemon");
    // then
    return response.expect(200).expect(expected);
  });

  it(`should /GET pokemons return error`, async () => {
    // given
    const expected: PokemonsList = [{ name: foo, url: foo }];
    const server = app.getHttpServer();
    jest.spyOn(pokemonServiceMock, "list").mockImplementation(async () => null);
    // when
    const response = request(server).get("/pokemon");
    // then
    return response.expect(404);
  });

  it(`should /GET pokemon by id return success`, () => {
    // given
    const expected = { id: 1 } as Pokemon;
    const server = app.getHttpServer();
    jest
      .spyOn(pokemonServiceMock, "get")
      .mockImplementation(async (id: string | number) => expected);
    // when
    const response = request(server).get(`/pokemon/${foo}`);
    // then
    return response.expect(200).expect(expected);
  });

  it(`should /GET pokemon by id return error`, () => {
    // given
    const expected = { id: 1 } as Pokemon;
    const server = app.getHttpServer();
    jest.spyOn(pokemonServiceMock, "get").mockImplementation(async () => null);
    // when
    const response = request(server).get(`/pokemon/${foo}`);
    // then
    return response.expect(404);
  });

  afterAll(async () => {
    await app.close();
  });
});
