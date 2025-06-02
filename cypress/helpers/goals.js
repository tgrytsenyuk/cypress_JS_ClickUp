import { faker } from '@faker-js/faker'

export const createNewGoal = () => {
    return cy.sendRequest('/team/90151225619/goal', 'POST', {'name': faker.internet.username()})
}

export const getAllGoals = () => {
    return cy.sendRequest('/team/90151225619/goal', 'GET')
}

export const getGoalById = (id) => {
    return cy.sendRequest('/goal/' + id, 'GET')
}

export const updateGoalById = (id) => {
    return cy.sendRequest('/goal/' + id, 'PUT', {'name': faker.company.name()})
}

export const deleteGoal = (id) => {
    return cy.sendRequest('/goal/' + id, 'DELETE')
}