
// -------Essential Tests -------
// - [x]  Get the `Name` input and type a name in it.
// - [x]  Use an assertion to check if the text inputted contains the name you provided (Hint: use the .should assertion)
// - [x]  Get the `Email` input and type an email address in it
// - [x] Get the `password` input and type a password in it
// - [x]  Set up a test that will check to see if a user can check the terms of service box
// - [x] Check to see if a user can submit the form data
// - [x] Check for form validation if an input is left empty

// beginning of Cypress tests


describe('Testing User Interaction with form elements', () => {
    it('Can navigate to http://localhost:3001', () => {
            cy.visit('http://localhost:3001')
    })

    it('Can get the "Name" input field and enter text' , () => {
        cy.get('input[name = "name"]') // one way to grab the name input field
            .type('John Smith')
            .should('have.value', 'John Smith')
    })

    it('Can get "Email" input and type an email address in it', () => {
        cy.get(':nth-child(3) > input') // second way to grab an element
            .type('john.smith@apple.com')
            .should('have.value', 'john.smith@apple.com')
    })

    it('Can get "password" input and type a password in it', () => {
        cy.get(':nth-child(4) > input') // second way to grab an element
            .type('password')
            .should('have.value', 'password')
    })

    it('Can get "Terms of Service" checkbox and can check the box on', () => {
        cy.get(':nth-child(5) > input') // second way to grab an element
            .check() // this can be used to check if a checkbox form works
    })

    it('Can click submit if all forms are filled out.', () => {
        cy.get('button') // second way to grab an element
            .click()
    })

})


describe('Testing validation errors', () => {
    it('Can navigate to http://localhost:3001', () => {
            cy.visit('http://localhost:3001')
    })

    it('Validation Error is flagged on missing input' , () => {
        cy.get('input[name = "name"]').type('John Smith')
        cy.get('input[name = "email"]').type('john.smith@apple.com')
        cy.get('input[name = "password"]').type('12')
        cy.get('#cypress')
            .should('contain', 'Your Password needs to have atleast 3 characters')
    })

})
