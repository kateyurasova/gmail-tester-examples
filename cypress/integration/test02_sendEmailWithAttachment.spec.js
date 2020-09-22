import * as users from '../fixtures/users.json';

let Chance = require('chance');

const USER_SEND_EMAIL = users.userSendEmail.email,
    USER_RECEIVE_EMAIL = users.userReceiveEmail.email,
    EMAIL_MESSAGE = `AUTO EMAIL MESSAGE ${Chance().timestamp()}`,
    EMAIL_SUBJECT = `AUTO EMAIL SUBJECT ${Chance().timestamp()}`,
    PICTURE_URL =
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Staircase_detail.' +
        '_Peabody_Museum_Salem%2C_Mass._RB25548.jpg/1280px-Staircase_detail._Peabody_Museum_Salem%2C_Mass._RB25548.jpg',
    FOLDER_NAME = Cypress.env('downloadFolder'),
    FULL_PATH = `cypress/fixtures/${FOLDER_NAME}`,
    FILE_NAME = 'Staircase_detail._Peabody_Museum_Salem,_Mass._RB25548.jpg';

describe('Sending email via Google API', () => {
    before(function () {
        cy.log('TEST PREPARATION: Load the picture');
        cy.downloadFile(PICTURE_URL, FULL_PATH, FILE_NAME);
    });

    it('Send email from one email to another',  () => {
        cy.log('WHEN User gmail user sends email with attachment to another gmail user');
        cy.log(`Email from ${USER_SEND_EMAIL} to ${USER_RECEIVE_EMAIL}`);
        cy.log(`Email subject is ${EMAIL_SUBJECT}`);
        cy.log(`Email message is ${EMAIL_MESSAGE}`);

        cy.fixture(`${FOLDER_NAME}/${FILE_NAME}`).then((image) => {
            let attachments = [
                {
                    filename: FILE_NAME,
                    content: image,
                    encoding: 'base64'
                }
            ];
            cy.sendGoogleEmailWithAttachments(
                USER_SEND_EMAIL,
                USER_RECEIVE_EMAIL,
                EMAIL_SUBJECT,
                EMAIL_MESSAGE,
                attachments
            );
        })

        cy.log('THEN Email is presented is your application/CRM');
        // Implement check for your specific app (UI implementation)
    });

});
