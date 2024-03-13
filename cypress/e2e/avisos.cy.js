describe('Crud de Avisos', () => {
    beforeEach(() => {
        cy.viewport(1600, 900)
        cy.login();
    });

    it('Cadastrar avisos', () => {
        cy.crudAvisos()

    });

    // it.only('Apresentar aviso BUG', () => {
    //     cy.get('.button-apresentar > button').click()
    //          cy.type('{esc}') BUG CONSERTADO
    // });
});