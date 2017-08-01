module.exports =
    {
        'Part one: FindCustomer that exists' : function(client)
        {
            client
                .url('https://advcalc-pp.liberty.fin-za.net/#/searchclient')
                .waitForElementVisible('body',1000)
                .setValue('#identificationInput', '57001947800')
                .pause(1000)
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
                .assert.visible('#productDetailCard')
                .assert.visible('#viewMore')
                .pause(1000)
                .end();

        }

    };