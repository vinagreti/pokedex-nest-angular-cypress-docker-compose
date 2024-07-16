import { colorsByType } from './../../../src/app/helpers/colors-by-type';
import { statAbbreviation } from './../../../src/app/helpers/stat-abbreviation';

describe('pokemon list', () => {
  const foo = 'foo';

  const pokemonMock = {
    id: foo,
    sprites: {
      front_default: '/icons/pokeball.svg',
      other: {
        'official-artwork': {
          front_default: foo,
        },
      },
    },
    name: foo,
    weight: foo,
    height: foo,
    abilities: [
      { ability: { name: foo } },
      { ability: { name: foo } },
      { ability: { name: foo } },
    ],
    stats: [
      { stat: { name: Object.keys(statAbbreviation)[0] } },
      { stat: { name: Object.keys(statAbbreviation)[1] } },
      { stat: { name: Object.keys(statAbbreviation)[2] } },
    ],
    types: [
      { type: { name: Object.keys(colorsByType)[0] } },
      { type: { name: Object.keys(colorsByType)[1] } },
      { type: { name: Object.keys(colorsByType)[2] } },
    ],
  };

  const imgMockBlob =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAFElEQVQIW2P8z8AARIQB4/9Qmbv7sH56AAAAASUVORK5CYII='; // Base64 for 1x1 red pixel image

  beforeEach(() => {
    cy.intercept(
      'GET',
      `http://localhost:3000/api/pokemon/${foo}`,
      pokemonMock
    ).as('getPokemon');
    cy.intercept(
      'GET',
      `http://localhost:4200//icons/pokeball.svg`,
      imgMockBlob
    ).as('getPokemon');
    cy.visit(`http://localhost:4200/${foo}`);
    cy.wait('@getPokemon');
  });

  it('displays the title', () => {
    cy.get('h1').should('have.text', 'Pokédex');
  });

  it(`should display pokemon name`, () => {
    cy.get('#pokemon-name').should('include.text', foo);
  });

  it(`should display pokemon id`, () => {
    cy.get('#pokemon-name').should('include.text', foo);
  });

  it(`should display pokemon about`, () => {
    cy.get('#pokemon-weight').should('include.text', foo);
    cy.get('#pokemon-height').should('include.text', foo);

    pokemonMock.types.forEach((type, index) => {
      cy.get(`#pokemon-type-${index}`).should('include.text', type.type.name);
    });

    pokemonMock.abilities.forEach((ability, index) => {
      cy.get(`#pokemon-ability-${index}`).should(
        'include.text',
        ability.ability.name
      );
    });
  });

  it(`should display pokemon stats`, () => {
    pokemonMock.stats.forEach((stat, index) => {
      cy.get(`#pokemon-stat-label-${index}`).should(
        'include.text',
        statAbbreviation[stat.stat.name]
      );
    });
  });
});
