/// <reference types="Cypress" />

const URL = "127.0.0.1:8080"

context('Pokedex', () => {

    describe('usa la pokedex', () => {
        let fetchPolyfill;
        before(() => {
            const polyfillUrl = 'https://unpkg.com/unfetch/dist/unfetch.umd.js';
        
            cy.request(polyfillUrl)
              .then((response) => {
                fetchPolyfill = response.body;
            });

            cy.visit('http://127.0.0.1:8080', {
              onBeforeLoad(contentWindow) {
                // eslint-disable-next-line no-param-reassign
                delete contentWindow.fetch;
                contentWindow.eval(fetchPolyfill);
                // eslint-disable-next-line no-param-reassign
                contentWindow.fetch = contentWindow.unfetch;
              },
            });
          });
        
        it('busca un pokemon', () => {
            cy.get('#barra-busqueda').type('Pikachu');
            cy.get('#lista-resultado-pokemon').should('have.length', 1);  
        });

        it('selecciona al pokemon', () => {
            cy.contains('pikachu').click();
        });

        it('muestra los datos', () => {
            cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon/pikachu', {fixture: 'pikachu.json'})
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
