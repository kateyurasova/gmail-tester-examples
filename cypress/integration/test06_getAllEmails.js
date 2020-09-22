describe('Google API', function () {

    it('All all email from inbox', () => {
        cy.log('Simply get all messages');
        cy.getAllEmails('drivecentricautomation@gmail.com');
    });

    it('Get all emails during specific period filtered by subject and sender',  () => {
        cy.log('Simply get all messages');
        cy.getEmailsInTimeRange("drivecentricautomation@gmail.com",
            "dcemailtestsix@gmail.com",
            "AUTO EMAIL SUBJECT",
            new Date(2020, 9, 22, 23, 31, 13), // Before September 22rd, 2020 23:59:59
            new Date(2020, 8, 22) // After August 22, 2020);
        )
    });

});
