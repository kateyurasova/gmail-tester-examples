import * as users from '../fixtures/users.json';

describe('Check email in inbox', function () {

    it('Check Google email with combo from+to+subject', function () {
        cy.checkGoogleEmail(
            'dcemailtestsix@gmail.com',
            'drivecentricautomation@gmail.com',
            "AUTO EMAIL SUBJECT 108920534422");
    });

    it('Check Google email with combo from+to+subject+message(snippet)', function () {
        cy.checkGoogleEmailWithMessage(
            'dcemailtestsix@gmail.com',
            'drivecentricautomation@gmail.com',
            "AUTO EMAIL SUBJECT 108920534422",
            "AUTO EMAIL MESSAGE 992764133");
    });

    it('Check Google email with combo from+to+subject+message(text in body)', function () {
        cy.getMessagesWithBody(
            'katsiaryna.yurasova@itechart-group.com',
            'drivecentricautomation@gmail.com',
            "Automating Repetitive Tasks with Excel Macros",
            "Macros save time and provide consistency in almost any Excel spreadsheet");

    });

});
