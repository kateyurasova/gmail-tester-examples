Cypress.Commands.add("replyForGoogleEmail", (from, to, subject, replyMessage) => {
    cy.task("gmail:replyEmail", {
        from: from,
        to: to,
        subject: subject,
        replyMessage: replyMessage
    })
        .then(response => {
            response.forEach(item => {
                expect(item.status).to.equal(200);
                expect(item.statusText).to.equal('OK');
            })
        });
})

Cypress.Commands.add("sendGoogleEmail", (from, to, subject, emailMessage) => {
    cy.task("gmail:sendEmail", {
        from: from,
        to: to,
        subject: subject,
        emailMessage: emailMessage
    })
        .then(response => {
            response.forEach(item => {
                expect(item.status).to.equal(200);
                expect(item.statusText).to.equal('OK');
            })
        });
})

Cypress.Commands.add("sendGoogleEmailWithAttachments", (from, to, subject, emailMessage, attachments) => {
    cy.task("gmail:sendEmailWithAttachments", {
        from: from,
        to: to,
        subject: subject,
        emailMessage: emailMessage,
        attachments: attachments
    })
        .then(response => {
            response.forEach(item => {
                expect(item.status).to.equal(200);
                expect(item.statusText).to.equal('OK');
            })
        });
})

Cypress.Commands.add("checkGoogleEmailWithMessage", (from, to, subject, message) => {
    cy.task("gmail:checkGoogleEmailWithMessage", {
        from: from,
        to: to,
        subject: subject,
        message: message
    }).then(response => {
        console.log('Check whether email was received');
        console.log(response);
        expect(response).not.to.equal(null);
    });
})

Cypress.Commands.add("checkGoogleEmail", (from, to, subject) => {
    cy.task("gmail:check", {
        from: from,
        to: to,
        subject: subject
    }).then(response => {
        console.log(response);
        expect(response).not.to.equal(null);
    });
})

Cypress.Commands.add("getAllEmails", (email) => {
    cy.task("gmail:getAllEmails", {
        email: email
    }).then(response => {
        console.log('All emails');
        console.log(response);
        return response;
    });
})

Cypress.Commands.add('getEmailBody', (from, to, subject) => {
    cy.task('gmail:get-messages', {
        to: to,
        options: {
            from: from,
            subject: subject,
            include_body: true
        }
    }).then(response => {
        expect(response).to.be.not.empty
        console.log(response)
        return response;
    });
});

Cypress.Commands.add("getMessagesWithBody", (from, to, subject, bodyText) => {
    cy.task("gmail:getMessagesWithBody", {
        from: from,
        to: to,
        subject: subject,
        bodyText: bodyText
    }).then(response => {
        expect(response).not.to.equal(null);
        return response;
    });
});
