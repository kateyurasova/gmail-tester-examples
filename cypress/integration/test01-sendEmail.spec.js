import * as users from '../fixtures/users.json';

let Chance = require('chance');

const USER_SEND_EMAIL = users.userSendEmail.email,
    USER_RECEIVE_EMAIL = users.userReceiveEmail.email,
    EMAIL_MESSAGE = `AUTO EMAIL MESSAGE ${Chance().timestamp()}`,
    EMAIL_SUBJECT = `AUTO EMAIL SUBJECT ${Chance().timestamp()}`;

describe('Sending email via Google API', function () {
    it('Send email from one email to another', function () {
        cy.log('WHEN User gmail user sends email to another gmail user');
        cy.log(`Email from ${USER_SEND_EMAIL} to ${USER_RECEIVE_EMAIL}`);
        cy.log(`Email subject is ${EMAIL_SUBJECT}`);
        cy.log(`Email message is ${EMAIL_MESSAGE}`);
        cy.sendGoogleEmail(USER_SEND_EMAIL, USER_RECEIVE_EMAIL, EMAIL_SUBJECT, EMAIL_MESSAGE);
    });

});
