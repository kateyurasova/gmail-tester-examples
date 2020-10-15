describe('Check email in inbox', function () {

    it('Check Google email with combo from+to+subject', () => {
        cy.log('WHEN User sends an email from your app');
        // Implement sending email in you app via UI

        cy.log('THEN Email sent from you app is received');
        cy.checkGoogleEmail(
            'cypressgmaitester1@gmail.com',
            'cypressexampletester1@gmail.com',
            'AUTO EMAIL SUBJECT 1419010844');
    });

    it('Check Google email with combo from+to+subject+message(snippet)',  () => {
        cy.log('WHEN User sends an email from your app');
        // Implement sending email in you app via UI

        cy.log('THEN Email sent from you app is received');
        cy.checkGoogleEmailWithMessage(
            'cypressgmaitester1@gmail.com',
            'cypressexampletester1@gmail.com',
            'AUTO EMAIL SUBJECT 1419010844',
            'AUTO EMAIL MESSAGE 1355898135');
    });

    it('Check Google email with combo from+to+subject+message(text in body)', () =>  {
        cy.log('WHEN User sends an email from your app');
        // Implement sending email in you app via UI

        cy.log('THEN Email sent from you app is received');
        cy.getMessagesWithBody(
            'katsiaryna.yurasova@itechart-group.com',
            'cypressexampletester1@gmail.com',
            'Automating Repetitive Tasks with Excel Macros',
            'Macros save time and provide consistency in almost any Excel spreadsheet');

    });

});
