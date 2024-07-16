describe('pokemon list', () => {
  const foo = 'foo';

  const pokemonsListMock = [
    { name: foo, url: foo },
    { name: foo, url: foo },
    { name: foo, url: foo },
    { name: foo, url: foo },
    { name: foo, url: foo },
  ];

  const pokemonsListResponse = {
    count: 1,
    next: 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20',
    previous: null,
    results: pokemonsListMock,
  };

  const pokemonMock = {
    id: foo,
    sprites: {
      front_default: '/icons/pokeball.svg',
    },
    name: foo,
  };

  beforeEach(() => {
    cy.intercept(
      'GET',
      'http://localhost:3000/api/pokemon*',
      pokemonsListResponse
    ).as('getPokemons');
    cy.intercept(
      'GET',
      `http://localhost:3000/api/pokemon/${foo}`,
      pokemonMock
    ).as('getPokemon');
    cy.visit('http://localhost:4200');
  });

  it('displays the title', () => {
    cy.get('h1').should('have.text', 'Pokédex');
  });

  it(`should load and display first ${pokemonsListMock.length} items`, () => {
    cy.wait('@getPokemons');
    cy.get('li').should('have.length', pokemonsListMock.length);
  });

  it(`should load more items`, () => {
    cy.get('#load-more').click();
    cy.wait('@getPokemons');
    cy.get('li').should('have.length', pokemonsListMock.length * 2);
  });

  it(`should display pokemon name and id`, () => {
    cy.get('li').first().get('#pokemon-card-name').should('contain.text', foo);

    cy.get('li').first().get('#pokemon-card-id').should('contain.text', foo);
  });
});
