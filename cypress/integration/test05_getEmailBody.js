context('Check email in inbox', () => {

    it('Send email from one email to another', () => {
        cy.getEmailBody(
            'katsiaryna.yurasova@itechart-group.com',
            'drivecentricautomation@gmail.com',
            "Automating Repetitive Tasks with Excel Macros").then((emails) => {
            cy.writeFile('cypress/fixtures/email-html.json', emails[0].body.html);
            let registerLink = emails[0].body.html
                .split('a href=')[5]
                .match(/\bhttp:\/\/\S+/)[0]
                .replace('"', '');
            console.log(registerLink);
            cy.visit(registerLink);
            cy.wait(10000);
        })
    });

});
