/// <reference types="cypress" />

describe('Navegacion', () => {
  it('Click en el Banner Grande y Volver a Home', () => {
    cy.visit('http://localhost:3000');

    cy.contains('Trending').should('exist');

    cy.get('[alt="Stranger Things"]')
        .should('exist')
        .click();

    cy.url().should('include', '/DetailedShow');
    cy.contains('Stranger Things').should('exist');

    cy.go('back');

    cy.url().should('eq', `http://localhost:3000/`);
    cy.contains('Trending').should('exist');
  });
});
