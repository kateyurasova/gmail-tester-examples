# Project Description
This project contains examples [gmail-tester-extended](https://www.npmjs.com/package/gmail-tester-extended) package usage.
All examples contains 
Examples overview:
1) [test01_sendEmail](https://github.com/kateyurasova/gmail-tester-examples/blob/master/cypress/integration/test01-sendEmail.spec.js) is an example of how to send the email from one gmail user to another using Google API.
This step is coded in 'WHEN' option. Expected result is expected to be implemented in 'THEN' section - this check is intended to check how sending email affected you application.

2) [test02_sendEmailWithAttachment](https://github.com/kateyurasova/gmail-tester-examples/blob/master/cypress/integration/test02_sendEmailWithAttachment.spec.js) shows you an example of how to send the email with attachment.

3) [test03_checkInbox](https://github.com/kateyurasova/gmail-tester-examples/blob/master/cypress/integration/test03_checkInbox.spec.js) shows several options of checking that email is contains for the specific gmail inbox.

4) [test04_replyForEmail](https://github.com/kateyurasova/gmail-tester-examples/blob/master/cypress/integration/test04_replyForEmail.js) shows an example of how to reply for an email found in inbox for the specific user.

5) [test05_test05_getEmailBody](https://github.com/kateyurasova/gmail-tester-examples/blob/master/cypress/integration/test05_getEmailBody.js) shows an example of how to work with email body - for example, getting the address of link in email to ensure that it navigates user to the right page.

6) [test06_getAllEmails](https://github.com/kateyurasova/gmail-tester-examples/blob/master/cypress/integration/test06_getAllEmails.js) provides examples of how to get all email for the specific user and also how to get result received withing 1 month or more with the ability to filter by subject and sender.
