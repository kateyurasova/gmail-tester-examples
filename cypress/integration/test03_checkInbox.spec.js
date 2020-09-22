describe('Check email in inbox', function () {

    it('Check Google email with combo from+to+subject', () => {
        cy.log('WHEN User sends an email from your app');
        // Implement sending email in you app via UI

        cy.log('THEN Email sent from you app is received');
        cy.checkGoogleEmail(
            'dcemailtestsix@gmail.com',
            'drivecentricautomation@gmail.com',
            "AUTO EMAIL SUBJECT 108920534422");
    });

    it('Check Google email with combo from+to+subject+message(snippet)',  () => {
        cy.log('WHEN User sends an email from your app');
        // Implement sending email in you app via UI

        cy.log('THEN Email sent from you app is received');
        cy.checkGoogleEmailWithMessage(
            'dcemailtestsix@gmail.com',
            'drivecentricautomation@gmail.com',
            "AUTO EMAIL SUBJECT 108920534422",
            "AUTO EMAIL MESSAGE 992764133");
    });

    it('Check Google email with combo from+to+subject+message(text in body)', () =>  {
        cy.log('WHEN User sends an email from your app');
        // Implement sending email in you app via UI

        cy.log('THEN Email sent from you app is received');
        cy.getMessagesWithBody(
            'katsiaryna.yurasova@itechart-group.com',
            'drivecentricautomation@gmail.com',
            "Automating Repetitive Tasks with Excel Macros",
            "Macros save time and provide consistency in almost any Excel spreadsheet");

    });

});
