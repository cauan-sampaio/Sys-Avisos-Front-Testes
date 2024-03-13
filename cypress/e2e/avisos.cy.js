describe('Crud de Avisos', () => {
    beforeEach(() => {
        // cy.viewport(1600, 900)
        cy.login();
    });

    it('Cadastrar avisos', () => {
    cy.get('app-cards.ng-star-inserted:nth-child(1) > div:nth-child(1) > div:nth-child(1) > app-pencil-icon:nth-child(1)')
        .click()
    cy.wait(3000)
     cy.screenshot()
    cy.get('#mat-input-2').click()
        .wait(5000).type('{enter}')

    });

    // it.only('Apresentar aviso BUG', () => {
    //     cy.get('.button-apresentar > button').click()
    //          cy.type('{esc}') BUG CONSERTADO
    // });
});