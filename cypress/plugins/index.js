// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const path = require("path");
const gmail = require("gmail-tester-extended");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin');

const POLL_INTERVAL = 5;
const MAX_POLL_INTERVAL = 60;

function getCredentials(email) {
    return path.resolve(__dirname, `credentials-${getLogin(email)}.json`);
}

function getToken(email) {
    return path.resolve(__dirname, `gmail_token-${getLogin(email)}.json`);
}

function getLogin(email) {
    let array = email.split('@');
    return array[0];
}

module.exports = (on, config) => {
    on("task", {
        "gmail:check": async args => {
            const {from, to, subject} = args;
            const email = await gmail.check_inbox(
                await getCredentials(to),
                await getToken(to),
                subject,
                from,
                to,
                POLL_INTERVAL,
                MAX_POLL_INTERVAL
            );
            return email;
        }
    });
    on("task", {
        "gmail:get-all-emails": async args => {
            const {email} = args;
            const allEmails = await gmail.get_messages(
                await getCredentials(email),
                await getToken(email),
                POLL_INTERVAL,
                MAX_POLL_INTERVAL
            );
            return allEmails;
        }
    });

    on("task", {
        "gmail:checkGoogleEmailWithMessage": async function (args) {
            const {from, to, subject, message} = args;
            const allEmails = await gmail.checkGoogleEmailWithMessage(
                await getCredentials(to),
                await getToken(to),
                subject,
                message,
                from,
                to,
                POLL_INTERVAL,
                MAX_POLL_INTERVAL
            );
            console.log(allEmails);
            return allEmails;
        }
    });

    on("task", {
        "gmail:replyEmail": async args => {
            const {from, to, subject, replyMessage} = args;
            const response = await gmail.reply_email(
                await getCredentials(to),
                await getToken(to),
                subject,
                from,
                to,
                replyMessage,
                POLL_INTERVAL,
                MAX_POLL_INTERVAL
            );
            return response;
        }
    });
    on("task", {
        "gmail:sendEmail": async args => {
            const {from, to, subject, emailMessage} = args;
            const response = await gmail.send_email(
                await getCredentials(from),
                await getToken(from),
                subject,
                from,
                to,
                emailMessage,
                POLL_INTERVAL,
                MAX_POLL_INTERVAL
            );
            return response;
        }
    });

    on("task", {
        "gmail:sendEmailWithAttachments": async args => {
            const {from, to, subject, emailMessage, attachments} = args;
            const response = await gmail.send_email_with_attachments(
                await getCredentials(from),
                await getToken(from),
                subject,
                from,
                to,
                emailMessage,
                attachments,
                POLL_INTERVAL,
                MAX_POLL_INTERVAL
            );
            return response;
        }
    });

    on('task', {
        'gmail:get-messages': async args => {
            const messages = await gmail.get_messages(
                await getCredentials(args.to),
                await getToken(args.to),
                args.options
            );
            return messages;
        }
    });

    on("task", {
        downloadFile
    });

    on("task", {
        "gmail:getMessagesWithBody": async args => {
            const {from, to, subject, bodyText} = args;
            const result = await gmail.getMessageWithTextInBody(
                await getCredentials(to),
                await getToken(to),
                subject,
                from,
                to,
                bodyText,
                POLL_INTERVAL,
                MAX_POLL_INTERVAL
            );
            return result;
        }
    });
}
