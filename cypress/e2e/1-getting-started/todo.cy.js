import { faker } from '@faker-js/faker'
import { createNewGoal, deleteGoal, getAllGoals, getGoalById, updateGoalById } from '../../helpers/goals'

describe('Test goals on Click Up', () => {

    it('Send request for GET Goals and return 200', () => {
        getAllGoals()
        .then((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it('Send request for GET Goals without token and return 400', () => {
        cy.request({
            url: '/team/90151225619/goal',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(400)
        })
    })

    it('Send request for Create Goal with valid name and return 200', () => {
        createNewGoal()
        .then((response) => {
            expect(response.status).to.eq(200)
            const goalID = response.body.goal.id

            deleteGoal(goalID)
            .then((response) => {
                expect(response.status).to.eq(200)
            })
        })
    })

    it('Send request for Create Goal without name and return 500', () => {
        cy.sendRequest('/team/90151225619/goal', 'POST')
        .then((response) => {
            expect(response.status).to.eq(500)
        })
    })

    it('Send request for Get Goal by ID and return 200', () => {
        createNewGoal()
        .then((response) => {
            expect(response.status).to.eq(200)
            const goalID = response.body.goal.id

            getGoalById(goalID)
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.goal.id).to.be.eq(goalID)
            })

            deleteGoal(goalID)
            .then((response) => {
                expect(response.status).to.eq(200)
            })
        })
    })

    it('Send request for Update name of Goal and return 200', () => {
        createNewGoal()
        .then((response) => {
            expect(response.status).to.eq(200)
            const goalID = response.body.goal.id
    
             updateGoalById(goalID)
             .then((response) => {
                 expect(response.status).to.eq(200)
             })
    
            deleteGoal(goalID)
            .then((response) => {
                expect(response.status).to.eq(200)
            })
        })
    })
})