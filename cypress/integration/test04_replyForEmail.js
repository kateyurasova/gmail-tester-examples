import * as users from '../fixtures/users.json';

describe('Check email in inbox', function () {

    it('Send email from one email to another', function () {
        cy.log('WHEN User sends an email from your app');
        // Implement sending email in you app via UI
        cy.log('AND Customer replies to email previously sent');
        cy.replyForGoogleEmail(
            'dcemailtestsix@gmail.com',
            'drivecentricautomation@gmail.com',
            "New Message from Kate 1111",
            "REPLY Message");

        cy.log('THEN Reply message is presented in your app');
        // Implement checking of receiving reply from customer
    });

});
