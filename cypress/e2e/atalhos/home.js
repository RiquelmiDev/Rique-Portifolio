export const acessaHome = ()=>{
    cy.visit('https://riqueportifoliodev.netlify.app/'); 
    cy.get('#btn-enter-sistem').click();
    cy.get('#btn-login').click();
}

export const abreFechaPastas = (id)=>{
    cy.get(id).dblclick();
    cy.get('.btn-close-modal').click();
}