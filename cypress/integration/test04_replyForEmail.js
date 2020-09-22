import * as users from '../fixtures/users.json';

describe('Check email in inbox', function () {

    it('Send email from one email to another', function () {
        cy.replyForGoogleEmail(
            'dcemailtestsix@gmail.com',
            'drivecentricautomation@gmail.com',
            "New Message from Kate 1111",
            "REPLY Message");
    });

});
