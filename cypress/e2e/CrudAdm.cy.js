describe('crud de adm(ADD COM SUCESSO)', () => {
    beforeEach(() => {
    cy.viewport(1600, 900)
    cy.login();
    });
    it.only('ADD USER COM SUCESSO', () => {
        cy.crud();
    });
    
    it('EXCLUIR USER COM SUCESSO', () => {
        cy.crudExcluir()
    });
});