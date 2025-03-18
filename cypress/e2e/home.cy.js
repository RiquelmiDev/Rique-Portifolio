const acessaHome = ()=>{
    cy.visit('https://riqueportifoliodev.netlify.app/'); 
    cy.get('#btn-enter-sistem').click();
    cy.get('#btn-login').click();
}

describe('Teste de funcionalidades da tela de Home', () => {

    it('Deve verificar se a navbar está visível na tela', () => {
        acessaHome();
        cy.get('#navbar-container').should('be.visible')
    });

    it('Deve voltar para tela de bloqueio', () => {
        acessaHome();
        cy.get('#home-icon').click();
    });

    it('Deve ir para a tela de politica e privacidade', () => {
        acessaHome(); 
        cy.get('.right-icons-nav > a').click();
    });

});