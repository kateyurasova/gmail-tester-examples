describe('Check email in inbox', function () {

    it('Send email from one email to another', function () {
        cy.getAllEmails('drivecentricautomation@gmail.com');
    });

});
