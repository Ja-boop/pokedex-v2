/// <reference types="Cypress" />

const URL = "127.0.0.1:8080"

context('Pokedex', () => {

    before(() => {
        cy.visit(URL);
    });

    describe('usa la pokedex', () => {

        it('busca un pokemon', () => {
            cy.get('#barra-busqueda').type('Pikachu');
            cy.get('#lista-resultado-pokemon').should('have.length', 1);
            cy.contains('pikachu').click();
        });

        it('selecciona al pokemon', () => {
            cy.get('#lista-resultado-pokemon').click();
        });

        it('muestra los datos', () => {
            cy.get('#imagen-pokemon').should('have.length', 1);
            cy.get('#id-pokemon').should('have.length', 1);
            cy.get('#nombre-pokemon').should('have.length', 1);
            cy.get('#tipos-pokemon').should('have.length', 1);
        })

        it('borrar pokemon del buscador', () => {
            cy.get('#barra-busqueda').clear();
        })

        it('busca otro pokemon', () =>{
            cy.get('#barra-busqueda').type('Charizard');
            cy.get('#lista-resultado-pokemon').should('have.length', 1);
            cy.contains('charizard').click();
            cy.get('#imagen-pokemon').should('have.length', 1);
            cy.get('#id-pokemon').should('have.length', 1);
            cy.get('#nombre-pokemon').should('have.length', 1);
            cy.get('#tipos-pokemon').should('have.length', 1);
        })
    });
});
