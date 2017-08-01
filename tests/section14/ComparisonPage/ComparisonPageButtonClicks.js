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
                .waitForElementVisible('#graphTabs',10000)
                .pause(1000);
        },

        'Part Five: Button Clicks working': function (client)
        {
            client
                .click('#effectiveAnnualCostTab',function(result)
                {
                    this.assert.strictEqual(result.status,0);
                })
                .pause(2000)
                .click('#illustrativeMaturityTab',function(result)
                {
                    this.assert.strictEqual(result.status,0);
                })
                .pause(2000)
                .click('#viewMore',function(result)
                {
                    this.assert.strictEqual(result.status,0);
                })
                .waitForElementVisible('#currentMonthlyContribution',7000)
                .pause(1000)
                .click('#viewLess',function(result)
                {
                    this.assert.strictEqual(result.status,0);
                })
                .pause(1000)
                //.assert.visible('#currentMonthlyContribution').to.equal('-1')
                //.expect.element('#currentMonthlyContribution',7000).to.not.be.visible
                .end();
        }

    };