describe('crud de adm(ADD COM SUCESSO)', () => {
    beforeEach(() => {
        cy.login();
    });
    it.only('ADD USER COM SUCESSO', () => {
        cy.crud();
    });
    
    it('EXCLUIR USER COM SUCESSO', () => {
        cy.crudExcluir()
    });
});