import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonDetailsPageComponent } from './pokemon-details-page.component';
import { RouterModule } from '@angular/router';

describe('PokemonDetailsPageComponent', () => {
  let component: PokemonDetailsPageComponent;
  let fixture: ComponentFixture<PokemonDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonDetailsPageComponent, RouterModule.forRoot([])],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
