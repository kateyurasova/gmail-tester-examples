describe('Google API', function () {

    it('All all email from inbox', () => {
        cy.log('Simply get all messages');
        cy.getAllEmails('cypressexampletester1@gmail.com');
    });

    it('Get all emails during specific period filtered by subject and sender',  () => {
        cy.log('Simply get all messages');
        cy.getEmailsInTimeRange("cypressexampletester1@gmail.com",
            "cypressgmaitester1@gmail.com",
            "AUTO EMAIL SUBJECT",
            new Date(2020, 10, 15, 23, 31, 13), // Before September 22rd, 2020 23:59:59
            new Date(2020, 9, 14) // After September 14, 2020);
        )
    });

});
