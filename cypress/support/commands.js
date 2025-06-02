import { faker } from '@faker-js/faker'

Cypress.Commands.add('sendRequest', (url, method, body =null) => { 
    cy.request({
        url: url,
        method: method,
        headers: {
            'Authorization': 'pk_200462817_PVC2I6W2HC59AIS8Z6UETRCAAHQJRQUZ',
            'Content-Type': 'application/json'
        },
        failOnStatusCode: false,
        body: body
    })
})
