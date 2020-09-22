context('Check email in inbox', () => {

    it('Send email from one email to another', () => {
        cy.log('WHEN User in your app sends an invitation email');
        // Implement sending email from your app via UI

        cy.log('THEN Email is received by customer in Gmail');
        cy.getEmailBody(
            'katsiaryna.yurasova@itechart-group.com',
            'drivecentricautomation@gmail.com',
            "Automating Repetitive Tasks with Excel Macros").then((emails) => {
            cy.writeFile('cypress/fixtures/email-html.json', emails[0].body.html);

            cy.log('AND Email contains button link that follows user to registration page');
            let registerLink = getRegisterLinkFromHtml(emails[0].body.html);
            cy.visit(registerLink);
            cy.url().should('include', 'https://www.businesswatchnetwork.com/events');
        })
    });

});

function getRegisterLinkFromHtml(html) {
    return html
        .split('a href=')[5]
        .match(/\bhttp:\/\/\S+/)[0]
        .replace('"', '');
}
