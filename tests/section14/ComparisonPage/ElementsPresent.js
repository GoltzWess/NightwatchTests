module.exports =
    {
        'Part one: FindCustomer that exists' : function(client)
        {
            client
                .url('https://advcalc-pp.liberty.fin-za.net/#/searchclient')
                .waitForElementVisible('body',1000)
                .setValue('#identificationInput', '57001947800')
                .setValue('#','1670028650008  ')
                .pause(1000)
                .assert.value('#','1670028650008  ')
                .assert.value('#identificationInput','57001947800')
                .waitForElementVisible('#continue',1000)
                .click('button[type=button]',function(result)
                {
                    this.assert.strictEqual(result.status,0);
                })

        },

        'Part two: Did it navigate to summary' : function(client)
        {
            client
                .waitForElementPresent('#clientname',10000);

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
                .pause(1000);
        },

        'Part Five: Check elements' : function (client)
        {
            client
                .waitForElementVisible('#graphState',1000)
                .assert.containsText('#viewMore','SHOW ASSUMPTIONS')
                .assert.visible('#illustrativeMaturityTab')
                .assert.visible('#effectiveAnnualCostTab')
                .assert.visible('#productDetailCard');

            client.expect.element('#maturityValue').text.to.not.equal(null);
            client.expect.element('#eacPercentage').text.to.not.equal(null);
            client.expect.element('#logo').text.to.not.equal(null);
            client.expect.element('#noExitCharge').text.to.not.equal(null);


            client .end();
        }

    };