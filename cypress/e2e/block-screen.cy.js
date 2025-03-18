describe('Teste de funcionalidades da tela de bloqueio', () => {

    it('Deve verificar se o horario está visível na tela', () => {
        cy.visit('https://riqueportifoliodev.netlify.app/'); 
        cy.get('#horario-container').should('be.visible')
    });

    it('Deve fazer login inserindo uma senha', () => {
        cy.visit('https://riqueportifoliodev.netlify.app/'); 
        cy.get('#btn-enter-sistem').click();
        cy.get('#senha').type('123456789');
        cy.get('#btn-login').click();
    });

    it('Deve fazer login sem inserir uma senha', () => {
        cy.visit('https://riqueportifoliodev.netlify.app/'); 
        cy.get('#btn-enter-sistem').click();
        cy.get('#btn-login').click();
    });

});