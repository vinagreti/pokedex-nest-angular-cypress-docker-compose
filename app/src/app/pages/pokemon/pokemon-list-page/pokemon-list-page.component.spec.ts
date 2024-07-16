import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListPageComponent } from './pokemon-list-page.component';

describe('PokemonListPageComponent', () => {
  let component: PokemonListPageComponent;
  let fixture: ComponentFixture<PokemonListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonListPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokemonListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
