Cypress.Commands.add('clickElement', (element: string) => {
    cy.get(element).should('exist').click();
});

Cypress.Commands.add('typeAText', (field: string, text: string) => {
    cy.get(field).should('exist').type(text);
});

Cypress.Commands.add("HandleSuccessAlert",(stub: void ,message: string,)=>{
    expect(stub).to.have.been.calledWith(message)
})

Cypress.Commands.add('selectValue',  (element: string, value: string) =>{
    cy.get(element).should("exist").select(value);
});