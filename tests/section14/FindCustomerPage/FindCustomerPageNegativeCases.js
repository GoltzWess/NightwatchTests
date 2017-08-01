module.exports =
    {
        'part one: FindCustomer that exists': function (client)
        {
            client
                .url('https://advcalc-pp.liberty.fin-za.net/#/searchclient')
                .waitForElementVisible('body', 1000)
                .setValue('#identificationInput', '5700194780')
                .pause(1000)
                .assert.value('#identificationInput', '5700194780')
                .waitForElementVisible('#continue', 1000)
                .click('button[type=button]', function (result) {
                    this.assert.strictEqual(result.status, 0);
                })
        },
        'Part Two: expect errors to show': function (client)
        {
            client
                .waitForElementVisible('#errorlogo',30000)
                .assert.visible('#errorheading')
                .assert.visible('#errordescription');

            client.expect.element('#errordescription').text.to.contains('The contract number could not be found on the system');

        }
    };