describe('Reply for email', () => {

    it('Reply for existing email previously received by gmail user', () => {
        cy.log('WHEN User sends an email from your app');
        // Implement sending email in you app via UI
        cy.log('AND Customer replies to email previously sent');
        cy.replyForGoogleEmail(
            'dcemailtestsix@gmail.com',
            'drivecentricautomation@gmail.com',
            "New message about smth12345",
            "REPLY Message 12345");

        cy.log('THEN Reply message is presented in your app');
        // Implement checking of receiving reply from customer
    });

});
