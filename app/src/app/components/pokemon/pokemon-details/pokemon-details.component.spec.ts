import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetailsComponent } from './pokemon-details.component';
import { Pokemon } from '../../../../../../models/pokemon.models';

describe('PokemonDetailsComponent', () => {
  let component: PokemonDetailsComponent;
  let fixture: ComponentFixture<PokemonDetailsComponent>;

  const pokemonMock = {
    name: 'test-name',
    sprites: {
      front_default: 'test-url',
      other: {
        'official-artwork': {
          front_default: 'test-url',
        },
      },
    },
  } as Pokemon;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonDetailsComponent);
    component = fixture.componentInstance;
    component.pokemon = pokemonMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
