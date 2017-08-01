module.exports =
    {
        'Part one: FindCustomer that exists' : function(client)
        {

            client
                .url('https://advcalc-pp.liberty.fin-za.net/#/searchclient')
                .waitForElementVisible('body',1000)
                .setValue('#identificationInput', '0010028622')
                .pause(1000)
                .assert.value('#identificationInput','0010028622')
                .waitForElementVisible('#continue',1000)
                .click('button[type=button]',function(result)
                {
                    this.assert.strictEqual(result.status,0);
                })
        },

        'Part two: Did it navigate to summary' : function(client)
        {
            client
                .waitForElementPresent('#clientname',60000);

        },
        'Part Three: Navigate to ComparisonPage' : function(client)
        {
            client
                .click('#proceed');
        },

        'Part Four: Did it navigate to ComparisonPage' : function(client)
        {
            client
                .waitForElementVisible('#graphTabs',7000)
                .assert.visible('#productDetailCard')
                .pause(1000);
        },
        'Part Five: Navigate To IllustratorPage': function (client)
        {
            client
                .url('https://advcalc-pp.liberty.fin-za.net/#/illustrator')
                .moveToElement('#retirementJourney', 10, 10)
                .waitForElementVisible('#retirementJourney', 7000)
                .waitForElementVisible('#welcomeMsg', 7000)
        },
        'Part Six: Illustrator Radio Button clicks ': function (client)
        {
            client
                .moveToElement('#retirementBreakdown',10,10)
                .waitForElementVisible('#retirementExpectations',60000);

                client
                    .moveToElement('#retirementExpectations',-1000,-1000);

            client
                .pause(1000)
                .waitForElementVisible('#retirementSavings',60000)
                .pause(5000);

            client.getText('#ValueLow',function (result)
            {
                client.click('#moderate',function(result)
                {
                    this.assert.strictEqual(result.status,0);
                });
                client.click('#btnRunCalculations');
                client.pause(10000);
                client.expect.element('#ValueLow').text.to.not.equal(result.value);

            });

            client.getText('#ValueLow',function (result)
            {
                client.click('#aggressive',function(result)
                {
                    this.assert.strictEqual(result.status,0);
                });
                client.click('#btnRunCalculations');
                client.pause(10000);
                client.expect.element('#ValueLow').text.to.not.equal(result.value);

            });
            client.end();
            }
    };